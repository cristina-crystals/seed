// Update these URLs when your platforms are ready
const EDU_APP_URL = '#'; // Replace with your EDU node app URL when ready
const SHOPIFY_URL = '#'; // Replace with your Shopify store URL

document.addEventListener('DOMContentLoaded', () => {
    // Update link URLs
    const eduLink = document.getElementById('edu-link');
    const shopLink = document.getElementById('shop-link');

    if (EDU_APP_URL !== '#') {
        eduLink.href = EDU_APP_URL;
        eduLink.textContent = 'Explore Learning';
    }

    if (SHOPIFY_URL !== '#') {
        shopLink.href = SHOPIFY_URL;
        shopLink.textContent = 'Shop Now';
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and features
    document.querySelectorAll('.link-card, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Add sparkle effect on cursor movement
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #fff, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnim 0.8s ease-out forwards;
    `;

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
}

// Add sparkle animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnim {
        0% {
            opacity: 1;
            transform: scale(0) translateY(0);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1.5) translateY(-10px);
        }
    }
`;
document.head.appendChild(style);
