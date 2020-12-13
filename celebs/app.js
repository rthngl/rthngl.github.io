const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display mobile menu, this is a function
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);

// show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const inputMenu = document.querySelector('#input-page')
    const myturnMenu = document.querySelector('#myturn-page')
    let scrollPos = window.scrollY

    // adds highlight class to my menu items -- adjust scrollPos numbers based on look, using inspect 
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        inputMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        inputMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        myturnMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2200) {
        myturnMenu.classList.add('highlight');
        inputMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 1000 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);