const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

function hideMenuListener(event) {
    if (!event.target.closest('.menu')) {
        menu.classList.remove("menu-visible");
        menuButton.classList.remove("menu-button-hidden");
        setTimeout(() => document.body.removeEventListener('click', hideMenuListener), 0);
    }
};

menuButton.addEventListener('click', () => {
    menu.classList.add("menu-visible");
    menuButton.classList.add("menu-button-hidden");
    setTimeout(() => document.body.addEventListener('click', hideMenuListener), 0);
});