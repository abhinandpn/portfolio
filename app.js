document.addEventListener('DOMContentLoaded', () => {
    // 0. Handle Loader removal
    const loader = document.getElementById('loader');
    if (loader) {
        // Wait for the progress animation to complete (2s) plus a small buffer
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            // Remove from DOM entirely after transition to prevent mouse event blocks
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800); 
        }, 2200);
    }
    // 1. Modern IntersectionObserver for Scroll Reveals
    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after reveal if you don't want repeat animations
                // observer.unobserve(entry.target);
            } else {
                // If you want animations to re-trigger when scrolling up, keep this. 
                // To animate only ONCE, remove this 'else' block.
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Apply observer to all reveal elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Optional: Add a subtle parallax effect or floating header on scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // 4. Custom Cursor Animation
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate position for the dot
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth trailing effect for the outline using requestAnimationFrame
    const animateCursor = () => {
        // Easing factor (0.1 = slow, 1.0 = immediate)
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover effects for all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });

    // 5. Fullscreen Toggle
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    if (fullscreenToggle) {
        fullscreenToggle.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable fullscreen: ${err.message}`);
                });
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        });

        // Update icon based on fullscreen state
        document.addEventListener('fullscreenchange', () => {
            const icon = fullscreenToggle.querySelector('i');
            if (document.fullscreenElement) {
                icon.classList.remove('fa-expand');
                icon.classList.add('fa-compress');
            } else {
                icon.classList.remove('fa-compress');
                icon.classList.add('fa-expand');
            }
        });
    }
});
