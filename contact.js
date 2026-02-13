// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            console.log('Form submitted:', formData);

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
