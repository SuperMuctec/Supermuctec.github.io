// Mousemove glow effect for hero text
document.addEventListener('mousemove', function(e) {
    const heroText = document.querySelector('.hero h1'); // Target the hero heading
    const { offsetX, offsetY } = e;  // Get mouse position
    const { clientWidth, clientHeight } = heroText;  // Get the size of the text element
    
    // Calculate the relative position of the mouse within the text element
    const xMove = (offsetX / clientWidth) * 100 - 50; // Range [-50, 50]
    const yMove = (offsetY / clientHeight) * 100 - 50; // Range [-50, 50]
    
    // Adjust the shadow values based on the mouse position
    heroText.style.textShadow = `
        ${xMove}px ${yMove}px 10px rgba(255, 0, 0, 0.7),
        ${-xMove}px ${-yMove}px 20px rgba(0, 255, 0, 0.7),
        ${xMove}px ${-yMove}px 30px rgba(0, 0, 255, 0.7)
    `;
});

// Apply hover effect for header sections
const header = document.querySelector('header');
header.addEventListener('mouseenter', () => {
    header.style.opacity = '1';
});
header.addEventListener('mouseleave', () => {
    header.style.opacity = '0.7';
});
