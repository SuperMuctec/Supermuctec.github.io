document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contact-button');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');

    contactButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        modal.style.display = 'block'; // Show modal
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide modal
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide modal if clicked outside
        }
    });
});
