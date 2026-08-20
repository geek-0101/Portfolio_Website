// script.js connection to portfolio

// Display the current year in footer
const footerYear=document.querySelector('.footer-year');
if(footerYear){
    footerYear.textContent=new Date().getFullYear();
}

// Greeting based on time of day
const getGreeting = () => {
    const hour=new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
}

const heroTitle = document.querySelector('.hero-section h1');
if (heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm Pauline`;
}

// ==== MOBILE MENU TOGGLE ===
 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
 
menuToggle.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',navLinks.classList.contains('open'));
});
 
// === SCROLL-BASED NAVBAR STYLING ====
const header = document.querySelector('.site-header');
 
window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
});
 
// === ACTIVE NAV LINK on scroll ====

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop-100){
            current = section.getAttribute('id');
        }
    })
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    })
})