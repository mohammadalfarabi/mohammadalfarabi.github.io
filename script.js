// 1. Update Jam Real-time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}
setInterval(updateTime, 1000);
updateTime();

// 2. Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

// 3. Smooth Mouse Parallax Effect (Desktop only)
if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 60;
        const y = (window.innerHeight / 2 - e.clientY) / 60;
        const titles = document.querySelectorAll('h1');
        titles.forEach(title => {
            title.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    });
}
