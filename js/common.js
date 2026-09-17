// Back to Top button behavior — shared across every page
document.addEventListener('DOMContentLoaded', function () {
    var mybutton = document.getElementById('btnBackToTop');
    if (!mybutton) return;

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
});