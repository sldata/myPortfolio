const burgerBtn = document.querySelector('.burger-btn')
const mainNav = document.querySelector('.main-nav')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const navItemsAnimation = document.querySelector('.nav-items-animation')

const showNavigation = () => {
	nav.classList.toggle('nav--active')
	handleNavItemsAnimation()
    closeNavigation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0
	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const closeNavigation = () => {
	navItems.forEach(el =>
		el.addEventListener('click', function (e) {
			nav.classList.remove('nav--active')
		})
	)
}

burgerBtn.addEventListener('click', showNavigation)
