function createHeart(color) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
    heart.style.backgroundColor = color; // Set the color of the hearts

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts based on the page
if (document.body.classList.contains("love-letter")) {
    setInterval(() => createHeart("#ff69b4"), 500); // Pink hearts for Love Letter
} else if (document.body.classList.contains("confession")) {
    setInterval(() => createHeart("#000"), 500); // Black hearts for Confession
} else {
    setInterval(() => createHeart("#ff1493"), 500); // Neon pink hearts for the main page
}
