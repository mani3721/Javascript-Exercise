// Show nav

const menu = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.page-nav');


menu.addEventListener('click', ()=> {
    menu.classList.toggle('show-icon')
    navBar.classList.toggle('active')
})