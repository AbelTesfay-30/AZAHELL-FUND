// Navigation & Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');
    const navbar = document.getElementById('navbar');

    // Show signin modal on first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        setTimeout(() => {
            const signinModal = document.getElementById('signinModal');
            if (signinModal) {
                signinModal.style.display = 'flex';
            }
        }, 2000);
        sessionStorage.setItem('hasVisited', 'true');
    }

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Theme toggle
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Counter animation for homepage
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const animateCounter = (counter) => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = current.toFixed(target % 1 !== 0 ? 1 : 0);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toFixed(target % 1 !== 0 ? 1 : 0);
                }
            };
            updateCounter();
        };

        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }
});


    // Signin Modal Handler
    const signinModal = document.getElementById('signinModal');
    const closeSigninModal = document.getElementById('closeSigninModal');
    const quickSigninForm = document.getElementById('quickSigninForm');

    if (closeSigninModal) {
        closeSigninModal.addEventListener('click', () => {
            signinModal.style.display = 'none';
        });
    }

    if (quickSigninForm) {
        quickSigninForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Welcome! Redirecting to dashboard...');
            signinModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });
