document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        link.style.transform = "scale(1.05)"; // Enlarge button when clicked
        setTimeout(() => {
            link.style.transform = ""; // Reset size after a short delay
        }, 300); // Delay matches the transition time
    });
});
