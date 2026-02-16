function getAllProductsFlat() {
    const all = [];
    for (const cat in products) {
        for (const br in products[cat]) {
            all.push(...products[cat][br]);
        }
    }
    return all;
}

function renderProductsFromArray(productArray) {
    const container = document.getElementById('product-list');
    if (!container) return;
    container.innerHTML = '';

    if (!productArray.length) {
        container.innerHTML = '<p>No products found.</p>';
        return;
    }

    productArray.forEach(product => {
        const div = document.createElement('div');
        div.className = 'category-item';

        let imgIndex = 0;
        const imgEl = document.createElement('img');
        imgEl.src = product.images[imgIndex];
        imgEl.alt = product.name;
        imgEl.style.cursor = 'pointer';
        imgEl.style.width = '200px';
        imgEl.style.height = '200px';
        imgEl.addEventListener('click', () => {
            imgIndex = (imgIndex + 1) % product.images.length;
            imgEl.src = product.images[imgIndex];
        });

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <input type="number" min="1" value="1" class="quantity-input" />
            <button class="add-cart">Add to Cart</button>
        `;

        div.insertBefore(imgEl, div.firstChild);

        const qtyInput = div.querySelector('.quantity-input');
        div.querySelector('.add-cart').addEventListener('click', () => {
            addToCart(product, parseInt(qtyInput.value) || 1);
        });

        container.appendChild(div);
    });
}

function renderProducts(category, brand) {
    let productArray = [];

    if (category && brand && products[category]?.[brand]) {
        productArray = products[category][brand];
    } else if (category && products[category]) {
        for (const br in products[category]) {
            productArray = productArray.concat(products[category][br]);
        }
    } else {
        for (const cat in products) {
            for (const br in products[cat]) {
                productArray = productArray.concat(products[cat][br]);
            }
        }
        productArray = productArray.sort(() => Math.random() - 0.5);
    }

    renderProductsFromArray(productArray);
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    renderProducts(params.get('category'), params.get('brand'));
});
