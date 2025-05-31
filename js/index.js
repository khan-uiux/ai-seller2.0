let menuBtn = document.querySelector('.mobile-menu-button');
let navbarEl = document.querySelector('.navbar');
let closeMenu = document.querySelector('.close-menu-icon');

// Open mobile menu
menuBtn.addEventListener('click', () => {
    navbarEl.style.left = "0px";
});

// Close mobile menu
closeMenu.addEventListener('click', () => {
    navbarEl.style.left = "-47rem";
    console.log('clicked');
});

// Fixed header on scroll
let headerEl = document.querySelector('#header');

const fixHeader = () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            headerEl.classList.add('const-header');
            console.log('class added');
        } else {
            headerEl.classList.remove('const-header');
        }
    });
};

fixHeader();
