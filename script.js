function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Set random left position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random float speed

    // Apply different colors based on the body class
    if (document.body.classList.contains("love-letter")) {
        heart.classList.add("love-letter");
    } else if (document.body.classList.contains("confession")) {
        heart.classList.add("confession");
    } else {
        heart.classList.add("main-page");
    }

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);
