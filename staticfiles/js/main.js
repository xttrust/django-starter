// Main JavaScript file for django-starter project

document.addEventListener('DOMContentLoaded', function() {
    console.log('Django Starter Project loaded successfully!');
    
    // Initialize any custom functionality here
    initializeApp();
});

function initializeApp() {
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add fade-in animation to content
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            content.style.opacity = '1';
        }, 100);
    }
}

// Utility functions
function showMessage(message, type = 'info') {
    // Create a simple message display system
    const messageDiv = document.createElement('div');
    messageDiv.className = `alert alert-${type} alert-dismissible fade show`;
    messageDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(messageDiv, container.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}