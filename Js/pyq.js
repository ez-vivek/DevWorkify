document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        const reveal = this.closest('.card-reveal');
        reveal.classList.remove('active');
    });
});