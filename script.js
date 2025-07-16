// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready!');
    
    // Initialize AOS animations library
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Handle loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
    
    // Header scroll effect
   // Get the header element
const header = document.querySelector('header');

// Initially make header transparent but visible
header.style.opacity = '0';
header.style.transform = 'translateY(-20px)';
header.style.transition = 'all 2s ease';

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    } else {
        header.classList.remove('scrolled');
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
    }
});

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    // Close menu when clicking on a menu item
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
    
    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove active class from all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Show current testimonial and activate indicator
        testimonials[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }
    
    // Add click event to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length - 1;
        }
        showTestimonial(currentIndex);
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    });
    
    // Auto-advance testimonials every 5 seconds
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    }, 5000);
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && subject && message) {
                // Show success message (in a real app, you'd send this data to a server)
                formStatus.classList.add('Manutenção');
                formStatus.textContent = 'Desculpa, estamos em manutenção.';

                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.classList.remove('Manutenção');
                }, 5000);
            } else {
                // Show error message
                formStatus.classList.add('error');
                formStatus.textContent = 'Desculpa, estamos em manutenção.';

                // Hide error message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.classList.remove('error');
                }, 5000);
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});