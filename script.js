        lucide.createIcons();

        // Custom Cursor
        const dot = document.getElementById('cursor-dot');
        const outline = document.getElementById('cursor-outline');
        const body = document.body;

        window.addEventListener('mousemove', (e) => {
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
            dot.style.transform = `translate(-50%, -50%)`;

            outline.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 500, fill: "forwards" });
            
            outline.style.transform = `translate(-50%, -50%)`;
        });

        const hoverTargets = document.querySelectorAll('.hover-target, a, button');
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => body.classList.add('cursor-hover'));
            target.addEventListener('mouseleave', () => body.classList.remove('cursor-hover'));
        });

        // Theme Toggle
        const themeBtn = document.getElementById('theme-btn');
        const themeIcon = document.getElementById('theme-icon');

        themeBtn.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            themeIcon.setAttribute('data-lucide', newTheme === 'dark' ? 'sun' : 'moon');
            lucide.createIcons();
        });

        // Clock
        function updateTime() {
            document.getElementById('current-time').textContent = new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', minute: '2-digit', hour12: false 
            });
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Reveal animations & Skill bars
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    
                    // Specific logic for skill bars
                    const bars = entry.target.querySelectorAll('.skill-bar-fill');
                    bars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-percent');
                    });
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = "0";
            section.style.transform = "translateY(20px)";
            section.style.transition = "all 0.8s ease-out";
            observer.observe(section);
        });
