document.querySelector('.yes-btn').addEventListener('click', function() {
    createHearts('💖'); // قلب خوشگل اضافه کن
});

document.querySelector('.no-btn').addEventListener('click', function() {
    createHearts('💔'); // قلب شکسته اضافه کن
});

function createHearts(type) {
    const heartContainer = document.getElementById('heart-container');
    for (let i = 0; i < 30; i++) { // تعداد قلب‌ها
        let heart = document.createElement('div');
        heart.innerHTML = type;
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // موقعیت تصادفی
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // سرعت تصادفی
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000); // حذف بعد از 5 ثانیه
    }
}
document.querySelector('.yes-btn').addEventListener('click', function() {
    window.location.href = "valentine.html"; // انتقال به صفحه دوم
});
document.querySelector('.no-btn').addEventListener('click', function() {
    for (let i = 0; i < 20; i++) { // تعداد قلب‌های شکسته
        let heart = document.createElement('div');
        heart.classList.add('broken-heart');
        heart.style.left = Math.random() * window.innerWidth + 'px'; // مکان تصادفی افقی
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // حذف قلب بعد از انیمیشن
        }, 4000);
    }
});
