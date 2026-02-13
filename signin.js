// Sign In Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signinForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const createAccountLink = document.getElementById('createAccountLink');

    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Clear previous errors
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';

            // Basic validation
            let isValid = true;

            if (!email || !email.includes('@')) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }

            if (!password || password.length < 6) {
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
                isValid = false;
            }

            if (isValid) {
                // Simulate login
                console.log('Login attempt:', { email, password: '***' });
                
                // Show success modal
                successModal.style.display = 'flex';
            }
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            successModal.style.display = 'none';
            // Redirect to dashboard or home
            window.location.href = 'index.html';
        });
    }

    if (createAccountLink) {
        createAccountLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Account creation feature coming soon!');
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});
