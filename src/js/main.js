const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')


const showNavigation = () =>{
    nav.classList.toggle('nav--active')
}

burgerBtn.addEventListener('click', showNavigation)