// Typing Animation for Name (Home Only)
function typeWriter(element, text, speed = 150) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = 'none'; // Stop blinking
        }
    }
    type();
}

// Init Typing on Load (for Home)
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    window.addEventListener('load', () => {
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            typeWriter(typingElement, 'SRASHTI KUMARI');
        }
    });
}

// Fade-in on Scroll (All Pages)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate progress bars
            const progress = entry.target.querySelector('.progress');
            if (progress) {
                progress.style.width = progress.dataset.width;
            }
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in, .skill-card, .project-card').forEach(el => {
        observer.observe(el);
    });
});

// // Contact Form (Contact Page Only)
// if (window.location.pathname.includes('contact.html')) {
//     document.querySelector('.contact-form').addEventListener('submit', function(e) {
//         e.preventDefault();
//         alert('Thanks for reaching out, SRASHTI! Message sent—I\'ll reply soon.');
//         this.reset();
//     });
