document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typing effect
    const text = "Hello, my name is Ashmit Das.";
    const typingText = document.getElementById('typing-text');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typingText.innerHTML = text; // Ensure the final text is clean
        }
    }
    
    // Start typing effect after a slight delay
    setTimeout(typeWriter, 500);

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 37, 47, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(26, 37, 47, 0.9)';
        }
    });

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = 'var(--primary-dark)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = 'var(--primary)';
        });
    });
});