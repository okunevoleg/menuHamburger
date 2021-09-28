'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const menuHamburger = document.querySelector('.hamburger-menu'),
		  menuHamburgerItem = document.querySelectorAll('.hamburger-menu__item'),
		  hamburger = document.querySelector('.hamburger');

	function showAndCloseMenu() {
		menuHamburger.classList.toggle('menu_active');
		hamburger.classList.toggle('hamburger_active');
	}

	hamburger.addEventListener('click', () => {
		showAndCloseMenu();
	});

	menuHamburgerItem.forEach(item => {
		item.addEventListener('click', ()=> {
			showAndCloseMenu();
		});
	});

})