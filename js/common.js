// Shared behavior across every page: back-to-top button + mobile hamburger nav
document.addEventListener('DOMContentLoaded', function () {

    // ---- Back to Top button ----
    var mybutton = document.getElementById('btnBackToTop');
    if (mybutton) {
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                mybutton.style.display = 'block';
            } else {
                mybutton.style.display = 'none';
            }
        });

        mybutton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ---- Mobile hamburger nav toggle ----
    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            var isOpen = mainNav.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close the menu automatically once a link is tapped
        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});