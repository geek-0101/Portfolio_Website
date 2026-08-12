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