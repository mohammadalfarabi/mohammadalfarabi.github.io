// 1. Fungsi jam digital di header
        function updateTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            document.getElementById('current-time').textContent = `${hours}:${minutes}`;
        }
        setInterval(updateTime, 1000);
        updateTime();

        // 2. Efek Scroll Reveal (Elemen muncul saat digulir)
        function reveal() {
            const reveals = document.querySelectorAll(".reveal");
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Jalankan sekali saat load
        reveal();

        // 3. Efek interaksi sederhana pada judul (mengikuti pergerakan mouse sedikit)
        document.addEventListener("mousemove", (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            const titles = document.querySelectorAll('h1');
            titles.forEach(title => {
                title.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });
