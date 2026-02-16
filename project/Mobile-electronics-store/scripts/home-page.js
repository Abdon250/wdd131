// Load categories on home page

const homeCategoryCotainer = document.getElementById('home-category-list');
homeCategoryCotainer.innerHTML = '';

    for (const category in categoryBrands) {
        const div = document.createElement('div');
        div.className = 'category-item';
        div.innerHTML = `
            <a href="categories.html?category=${category}">
                <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <img src="${categoryBrands[category][0].image}" alt="${category}" loading="lazy">
            </a>
        `;
        homeCategoryCotainer.appendChild(div);
    }
