document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchForm = document.getElementById("search-form");
    if (!searchInput || !searchForm) return;

    const allProducts = getAllProductsFlat();

    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    searchInput.value = query;

    function runSearch(q) {
        const str = q.trim().toLowerCase();
        if (!str) {
            renderProductsFromArray([]);
            return;
        }
        const filtered = allProducts.filter(p =>
            p.name.toLowerCase().includes(str) ||
            p.description.toLowerCase().includes(str)
        );
        renderProductsFromArray(filtered);
    }

    runSearch(query);

    searchInput.addEventListener("input", () => runSearch(searchInput.value));
    searchForm.addEventListener("submit", e => {
        e.preventDefault();
        runSearch(searchInput.value);
    });
});

