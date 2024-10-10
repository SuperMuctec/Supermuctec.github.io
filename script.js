document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('nav ul li:nth-child(3)');
    const dropdown = document.querySelector('.contact-dropdown');
    const ctaButton = document.querySelector('.cta-button');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');

    contactButton.addEventListener('mouseenter', function () {
        dropdown.style.display = 'block';
    });

    contactButton.addEventListener('mouseleave', function () {
        dropdown.style.display = 'none';
    });

    ctaButton.addEventListener('click', function () {
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
