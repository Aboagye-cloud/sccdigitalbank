// Fills in the current year in the footer (replaces the old <%: DateTime.Now.Year %>)
document.addEventListener('DOMContentLoaded', function () {
    var yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});