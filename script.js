document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service-card');

    services.forEach(service => {
        service.addEventListener('click', function() {
            alert(`You clicked on ${service.querySelector('h3').innerText}`);
        });
    });
});
