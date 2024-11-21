document.querySelectorAll('.sem-button').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.card');
        const reveal = card.querySelector('.card-reveal');
        reveal.classList.add('active');
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        const reveal = this.closest('.card-reveal');
        reveal.classList.remove('active');
    });
});