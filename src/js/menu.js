const toggle = document.querySelector('.menu__toggler');
const menu_collapse = document.querySelector('.menu__collapse');
let isOpen = false;
const langbtn = document.querySelector('.navbar__link--dropdown');
const langmenu = document.querySelector('.menu__dropdown');

langbtn.addEventListener('click', (e) => {
    const expanded = langbtn.getAttribute('aria-expanded') === 'true' || false;
    langbtn.setAttribute('aria-expanded', !expanded);
    langmenu.ariaHidden = expanded;
});
toggle.addEventListener('click', () => {
    menu_collapse.ariaHidden = isOpen;
    toggle.ariaExpanded = !isOpen;
    document.body.classList.toggle("no-scroll");
    isOpen = !isOpen;
});



// toutes les pages