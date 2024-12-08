const menuTitle = document.querySelector('.menu .title');
const menu = document.querySelector('.menu');

menuTitle.addEventListener('click', () => {
    menu.classList.toggle('open');
});