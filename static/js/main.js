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

// Newsletter subscription handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value;
    const button = event.target.querySelector('button[type="submit"]');
    const originalHTML = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    button.disabled = true;
    
    // Simulate API call (replace with actual implementation)
    setTimeout(() => {
        // Reset button
        button.innerHTML = originalHTML;
        button.disabled = false;
        
        // Clear input
        emailInput.value = '';
        
        // Show success message
        showMessage(`
            <i class="fas fa-check-circle"></i> 
            <strong>Success!</strong> Thank you for subscribing to our newsletter. 
            We'll keep you updated with the latest news and features.
        `, 'success');
        
        // Optional: You can replace this with actual newsletter signup logic
        console.log('Newsletter signup:', email);
    }, 1500);
}