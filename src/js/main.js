const burgerBtn = document.querySelector('.burger-btn')
const mainNav = document.querySelector('.main-nav')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const navItemsAnimation = document.querySelector('.nav-items-animation')
const currentYear = document.querySelector('.date')

const showNavigation = () => {
	nav.classList.toggle('nav--active')
	handleNavItemsAnimation()
	closeNavigation()
}

const changeDate = () => {
	const date = new Date()
	let year = date.getFullYear()
	currentYear.innerHTML = year
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

changeDate()
document.addEventListener('DOMContentLoaded', () => {
	const skills = document.querySelectorAll('.skill')
	skills.forEach(skill => {
		const skillBtn = skill.querySelector('.skill-title-box')
		const skillContent = skill.querySelector('.skill-content')
		const skillArrow = skill.querySelector('.title-right')
		const itemBars = skill.querySelectorAll('.item-bar')
		skillBtn.addEventListener('click', () => {
			itemBars.forEach(bar => {
				setTimeout(() => {
					bar.classList.toggle('active-bar')
				}, 100)
			})
			if (skillContent.style.maxHeight) {
				skillContent.style.maxHeight = null
				skillArrow.style.transform = 'rotate(0)'
			} else {
				skillContent.style.maxHeight = skillContent.scrollHeight + 'px'
				skillArrow.style.transform = 'rotate(180deg)'
			}
		})
	})
})
