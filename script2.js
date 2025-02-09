const floatingTextsContainer = document.getElementById('floating-texts');

// ایجاد متن‌های شناور "I Love You"
function createFloatingText() {
    const text = document.createElement('div');
    text.classList.add('floating-text');
    text.textContent = 'I Love You';
    text.style.left = Math.random() * 100 + 'vw';
    text.style.animationDuration = Math.random() * 3 + 2 + 's';
    floatingTextsContainer.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 5000);
}

setInterval(createFloatingText, 500);
