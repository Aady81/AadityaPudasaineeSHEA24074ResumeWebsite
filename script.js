// Fade-in animation on scroll
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
});

// Mobile menu toggle (basic implementation)
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    const nav = document.querySelector('.desktop-nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.right = '1.5rem';
        nav.style.background = '#fff';
        nav.style.padding = '1rem';
        nav.style.border = '1px solid #e4e4e7';
        nav.style.borderRadius = '8px';
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        
        // Reset margins for mobile dropdown
        nav.querySelectorAll('a').forEach(a => {
            a.style.margin = '0.5rem 0';
        });
    }
});