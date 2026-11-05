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

        // Close menu when clicking any nav link
        navList.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navList.classList.remove('is-open');
                toggleBtn.classList.remove('is-active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-is-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!toggleBtn.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('is-open');
                toggleBtn.classList.remove('is-active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-is-open');
            }
        });
    }

    // Dark Theme Toggle
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
});
