document.addEventListener('DOMContentLoaded', function() {
    const signUpBtn = document.getElementById('signUpBtn');
    const modal = document.getElementById('signUpModal');
    const submitBtn = document.getElementById('submitName');
    const nameInput = document.getElementById('nameInput');

    // Show modal when sign up button is clicked
    signUpBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    // Handle name submission
    submitBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            alert(`Welcome, ${name}! Thank you for joining us.`);
            modal.style.display = 'none';
            nameInput.value = '';
        } else {
            alert('Please enter your name.');
        }
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add hover animation to cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
