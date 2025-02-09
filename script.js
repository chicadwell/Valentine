document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    
    yesBtn.addEventListener("click", function() {
        createHearts("❤️"); // قلب سالم
        setTimeout(() => { window.location.href = "page2.html"; }, 2000); // هدایت به صفحه دوم
    });

    noBtn.addEventListener("click", function() {
        fallingBrokenHearts(); // قلب شکسته
    });

    function createHearts(emoji) {
        const container = document.body;
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.classList.add("falling-heart");
            heart.textContent = emoji;
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.animationDuration = (Math.random() * 2 + 2) + "s"; // سرعت تصادفی
            container.appendChild(heart);

            setTimeout(() => { heart.remove(); }, 4000); // حذف بعد از ۴ ثانیه
        }
    }

    function fallingBrokenHearts() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.className = "broken-heart";
            heart.style.left
