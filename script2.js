const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.style.display = 'none';
    });
});