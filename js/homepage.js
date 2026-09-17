// Fill in the current year in the footer (replaces the old <%: DateTime.Now.Year %>)
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Back to Top button behavior
var mybutton = document.getElementById("btnBackToTop");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});