document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.header-main__toggle');
    const navList = document.querySelector('.header-main__nav-list');

    if (toggleBtn && navList) {
        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = navList.classList.toggle('is-open');
            toggleBtn.classList.toggle('is-active', isOpen);
            toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.classList.toggle('menu-is-open', isOpen);
        });

        navList.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navList.classList.remove('is-open');
                toggleBtn.classList.remove('is-active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-is-open');
            });
        });

        document.addEventListener('click', function (e) {
            if (!toggleBtn.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('is-open');
                toggleBtn.classList.remove('is-active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-is-open');
            }
        });
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }

        themeToggleBtn.addEventListener('click', function () {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    const prevBtn = document.querySelector('.feedback__prev');
    const nextBtn = document.querySelector('.feedback__next');
    const track = document.querySelector('.feedback__track');
    const items = document.querySelectorAll('.feedback__item');

    if (prevBtn && nextBtn && track && items.length > 0) {
        let currentIndex = 0;
        const totalSlides = items.length;

        function updateSlide(index) {
            currentIndex = (index + totalSlides) % totalSlides;
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
        }

        prevBtn.addEventListener('click', function () {
            updateSlide(currentIndex - 1);
        });

        nextBtn.addEventListener('click', function () {
            updateSlide(currentIndex + 1);
        });

        let startX = 0;
        track.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', function (e) {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 40) {
                if (diff > 0) {
                    updateSlide(currentIndex + 1);
                } else {
                    updateSlide(currentIndex - 1);
                }
            }
        }, { passive: true });
    }
});
