const html = document.querySelector('html');
const btnMenu = document.querySelector('.ico-menu');
const menuNav = document.querySelector('.links nav');
const menus = document.querySelector('.links');
const logo = document.querySelector('.logo');

btnMenu.addEventListener('click', () =>{
    menuNav.classList.toggle('hasMenu');
    if(menuNav.classList.contains('hasMenu')){
        html.style.overflow = 'hidden';
    }else{
        html.style.overflow = 'auto';
    }
})

window.addEventListener('scroll', () =>{
    if(this.pageYOffset >= 500){
        logo.style.position = 'static';
        menus.style.position = 'static';
    }else{
        logo.style.position = 'fixed';
        menus.style.position = 'fixed';
    }
})