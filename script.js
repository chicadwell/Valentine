const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const heartsContainer = document.getElementById('hearts-container');

// وقتی Yes زده شد
yesBtn.addEventListener('click', () => {
    createHearts('💖'); // قلب صورتی
    setTimeout(() => {
        window.location.href = 'page2.html'; // برو به صفحه دوم
    }, 2000);
});

// وقتی No زده شد
noBtn.addEventListener('click', () => {
    createHearts('💔'); // قلب شکسته
});

// تابع برای ایجاد قلب‌های در حال ریزش
function createHearts(emoji) {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = emoji;
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);
    }
}
