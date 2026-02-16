
const params = new URLSearchParams(window.location.search);
const categoryParam = params.get('category'); 

const category = categoryParam || null;
const title = document.getElementById('category-title');
const brandList = document.getElementById('brand-list');

brandList.innerHTML = '';

if (!category) {
    // Show all categories
    title.textContent = 'Categories';
    for (const cat in categoryBrands) {
        const div = document.createElement('div');
        div.className = 'category-item';
        div.innerHTML = `
            <img src="${categoryBrands[cat][0].image}" alt="${cat}" loading="lazy">
            <p>${cat}</p>
        `;
        div.addEventListener('click', () => {
            window.location.href = `categories.html?category=${cat}`;
        });
        brandList.appendChild(div);
    }
} else {
    // Show brands for this category
    if (!categoryBrands[category]) {
        brandList.innerHTML = '<p>No brands available for this category.</p>';
    } else {
        title.textContent = category.toUpperCase();
        categoryBrands[category].forEach(brand => {
            const div = document.createElement('div');
            div.className = 'category-item';
            div.innerHTML = `
                <img src="${brand.image}" alt="${brand.name}" loading="lazy">
                <p>${brand.name}</p>
            `;
            div.addEventListener('click', () => {
                window.location.href = `products.html?category=${category}&brand=${encodeURIComponent(brand.name)}`;
            });
            brandList.appendChild(div);
        });
    }
}

