function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    if (document.body.classList.contains("love-letter")) {
        heart.classList.add("pink-heart");
    } else if (document.body.classList.contains("confession")) {
        heart.classList.add("white-heart");
    }

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
