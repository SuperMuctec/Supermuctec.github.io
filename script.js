document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactButton').onclick = function() {
        document.getElementById('contactModal').style.display = 'block';
    }

    document.getElementById('closeModal').onclick = function() {
        document.getElementById('contactModal').style.display = 'none';
    }

    window.onclick = function(event) {
        const modal = document.getElementById('contactModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    document.getElementById('discordButton').onclick = function() {
        window.open('https://discord.gg', '_blank');
    }
});
