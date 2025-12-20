const canvas = document.getElementById('neonCanvas');
const ctx = canvas.getContext('2d');

const colors = ['hsla(180,100%,50%,0.6)', 'hsla(300,100%,50%,0.6)'];
const circles = Array.from({ length: 10 }, (_, i) => ({
  x: 0,
  y: 0,
  r: Math.random() * 40 + 60,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5,
  c: colors[i % colors.length]
}));

const resize = () => {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  circles.forEach(c => {
    c.x = Math.random() * w;
    c.y = Math.random() * h;
  });
};

resize();
window.addEventListener('resize', resize);

const animate = () => {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  ctx.clearRect(0, 0, w, h);

  circles.forEach(c => {
    const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
    g.addColorStop(0, c.c);
    g.addColorStop(1, 'hsla(0,0%,0%,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();

    c.x += c.dx;
    c.y += c.dy;

    if (c.x - c.r < 0 || c.x + c.r > w) c.dx *= -1;
    if (c.y - c.r < 0 || c.y + c.r > h) c.dy *= -1;
  });

  requestAnimationFrame(animate);
};

animate();
