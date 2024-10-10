document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");

    contactBtn.onclick = function () {
        modal.style.display = "block";
    };

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Redirect button functionality
    document.getElementById("discordBtn").onclick = function () {
        window.location.href = "https://discord.gg";
    };
});
