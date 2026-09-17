document.addEventListener('DOMContentLoaded', function () {

    // ---- FAQ accordion ----
    document.querySelectorAll('.faq-header').forEach(function (header) {
        header.addEventListener('click', function () {
            var item = header.parentElement;
            var body = item.querySelector('.faq-body');
            var isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(function (otherItem) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-body').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });

    // ---- Live search across help categories and FAQs ----
    var searchInput = document.getElementById('supportSearch');
    var categoryCards = document.querySelectorAll('#categoriesGrid .category-card');
    var faqItems = document.querySelectorAll('#faqWrapper .faq-item');
    var noCategoryResults = document.getElementById('noCategoryResults');
    var noFaqResults = document.getElementById('noFaqResults');

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            var query = searchInput.value.trim().toLowerCase();
            var categoryMatches = 0;
            var faqMatches = 0;

            categoryCards.forEach(function (card) {
                var text = card.textContent.toLowerCase();
                var matches = query === '' || text.indexOf(query) !== -1;
                card.classList.toggle('hidden-by-search', !matches);
                if (matches) categoryMatches++;
            });

            faqItems.forEach(function (item) {
                var text = item.textContent.toLowerCase();
                var matches = query === '' || text.indexOf(query) !== -1;
                item.classList.toggle('hidden-by-search', !matches);
                if (matches) {
                    faqMatches++;
                } else {
                    // Collapse anything that no longer matches
                    item.classList.remove('active');
                    item.querySelector('.faq-body').style.maxHeight = null;
                }
            });

            if (noCategoryResults) {
                noCategoryResults.classList.toggle('show', categoryMatches === 0 && query !== '');
            }
            if (noFaqResults) {
                noFaqResults.classList.toggle('show', faqMatches === 0 && query !== '');
            }
        });
    }
});