// Floating hearts animation
function createHearts() {
    const container = document.querySelector('.love-letter');
    if (!container) return; // Only run on love-letter page

    const colors = ['#ff0077', '#ffffff', '#ff69b4'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.innerHTML = '♥';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 300);
}

document.addEventListener('DOMContentLoaded', createHearts);