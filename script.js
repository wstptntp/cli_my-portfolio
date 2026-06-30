/**
 * JavaScript Features & Interactive System
 * Wongsaton (Tee) Pattanantapong Portfolio Website
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dark/Light Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            
            // Save preference
            if (body.classList.contains('light-theme')) {
                localStorage.setItem('portfolio-theme', 'light');
            } else {
                localStorage.setItem('portfolio-theme', 'dark');
            }
        });
    }

    // --- Mobile Menu Navigation ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Header Background Scroll Shift ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Scroll Active Link Tracking ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Shift threshold slightly to account for fixed navbar height
            if (window.scrollY >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // --- Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    const counterSpeed = 80; // Speed modifier

    const runCounterAnimation = (counter) => {
        const updateCount = () => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const count = parseFloat(counter.innerText);
            
            // Calculate increment step based on float or integer
            const isFloat = target % 1 !== 0;
            const increment = target / counterSpeed;

            if (count < target) {
                const nextVal = count + increment;
                if (isFloat) {
                    counter.innerText = nextVal.toFixed(1);
                } else {
                    counter.innerText = Math.ceil(nextVal);
                }
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    // Trigger counters only when they enter viewport
    const metricsSection = document.getElementById('metrics');
    if (metricsSection) {
        const observerOptions = {
            root: null,
            threshold: 0.3
        };

        const metricsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => runCounterAnimation(counter));
                    observer.unobserve(entry.target); // Trigger once
                }
            });
        }, observerOptions);

        metricsObserver.observe(metricsSection);
    }

    // --- Dynamic Card Mouse Light Effect ---
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Adjust card background glow slightly
            card.style.backgroundImage = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(0, 245, 155, 0.08), transparent)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.backgroundImage = '';
        });
    });

    // --- Form Submission & Toast ---
    const contactForm = document.getElementById('contact-form');
    const successToast = document.getElementById('form-success');

    if (contactForm && successToast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Perform simple validation check
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all required fields.');
                return;
            }

            // Simulate form submission to backend/GitHub Pages API
            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn.innerText = 'Transmitting Data...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Hide form
                contactForm.classList.add('hidden');
                contactForm.style.display = 'none';

                // Reveal success toast
                successToast.classList.remove('hidden');
                successToast.style.opacity = '1';
            }, 1200);
        });
    }

    // --- Interactive Visual Dashboard: Live Hover Update ---
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.filter = 'brightness(1.4) drop-shadow(0 0 8px rgba(0, 245, 155, 0.4))';
        });
        bar.addEventListener('mouseleave', () => {
            bar.style.filter = '';
        });
    });
});
