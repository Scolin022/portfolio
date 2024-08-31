// Scroll effect for background
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.bg-pattern').style.transform = `translateY(${scrollY * 0.5}px)`;
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('button');
const mobileMenu = document.querySelector('nav ul');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('flex-col');
    mobileMenu.classList.toggle('absolute');
    mobileMenu.classList.toggle('top-16');
    mobileMenu.classList.toggle('left-0');
    mobileMenu.classList.toggle('right-0');
    mobileMenu.classList.toggle('bg-gray-900');
    mobileMenu.classList.toggle('p-4');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation to projects
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('#projects .bg-gray-800').forEach(project => {
    projectObserver.observe(project);
});