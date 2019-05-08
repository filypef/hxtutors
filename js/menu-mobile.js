const btnMenu = document.querySelector('.ico-menu');
const menu = document.querySelector('.links nav');

btnMenu.addEventListener('click', () =>{
    console.log('oi');
    menu.classList.toggle('hasMenu');
})