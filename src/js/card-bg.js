document.querySelectorAll('.book-card__image-wrapper').forEach(wrapper => {
    const img = wrapper.querySelector('img');
    if (!img) return;

    wrapper.style.setProperty('--bg-image', `url("${img.src}")`);
});
document.querySelectorAll('.gallery-card__image-wrapper').forEach(wrapper => {
    const img = wrapper.querySelector('img');
    if (!img) return;

    wrapper.style.setProperty('--bg-image', `url("${img.src}")`);
});