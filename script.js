document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contact-button');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');

    contactButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
