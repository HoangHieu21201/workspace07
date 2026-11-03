document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.header-main__toggle');
    const navList = document.querySelector('.header-main__nav-list');

    if (toggleBtn && navList) {
        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = navList.classList.toggle('is-open');
            toggleBtn.classList.toggle('is-active', isOpen);
            toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when clicking any nav link
        navList.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navList.classList.remove('is-open');
                toggleBtn.classList.remove('is-active');
                toggleBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!toggleBtn.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('is-open');
                toggleBtn.classList.remove('is-active');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
