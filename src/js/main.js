const burgerBtn = document.querySelector('.burger-btn')
const mainNav = document.querySelector('.main-nav')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const navItemsAnimation = document.querySelector('.nav-items-animation')


const showNavigation = () =>{
    nav.classList.toggle('nav--active')
    handleNavItemsAnimation()
    
}


const handleNavItemsAnimation = () =>{
    let delayTime = 0
    navItems.forEach((item) =>{
        item.classList.toggle ('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
      
}



burgerBtn.addEventListener('click', showNavigation)