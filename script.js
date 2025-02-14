document.addEventListener('DOMContentLoaded', function() {
    // Audio Handling
    const audioOverlay = document.getElementById('audioStarter');
    const audios = document.querySelectorAll('audio');
    
    function startAudio() {
        audios.forEach(audio => {
            audio.play().catch(error => console.log('Audio play prevented'));
        });
        if(audioOverlay) audioOverlay.remove();
        document.removeEventListener('click', startAudio);
        document.removeEventListener('touchstart', startAudio);
    }

    if(audioOverlay) {
        document.addEventListener('touchstart', startAudio);
        document.addEventListener('click', startAudio);
    }

    // Floating Hearts
    if(document.querySelector('.love-letter') || document.querySelector('.confession-page')) {
        function createHeart() {
            const colors = document.querySelector('.confession-page') ? ['#ffffff'] : ['#ff0077', '#ffffff', '#ff69b4'];
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.innerHTML = '♥';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 300);
    }
});