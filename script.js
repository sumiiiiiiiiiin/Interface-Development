
function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || !/^[a-zA-Z0-9]+$/.test(username)) {
        window.alert("Form submission failed");
        console.log("Form submission failed");
        return;
    }

    if (email === "" || !email.includes("@")) {
        window.alert('Form submission failed');
        console.log('Form submission failed');
        return;
    }

    if (password === "" || password.length < 8) {
        window.alert("Form submission failed");
        console.log("Form submission failed");
        return;
    }

    window.alert("Form submitted successfully");
    console.log("Form submitted successfully");
}


const products = [
    'Taylor Swift',
    'The 1975',
    'Liam Gallagher',
    'Valley',
    'Blur',
    'Troye Sivan',
    'Muse',
    'Cold play',
    'Radiohead',
    'Bleachers',
];

function displayProducts(productList, products) {
    productList.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        const li = document.createElement('li');
        li.textContent = products[i];
        productList.appendChild(li);
    }
}

function searchProducts(query, products) {
    return products.filter(product =>
        product.toLowerCase().includes(query.toLowerCase())
    );
}

const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

searchInput.addEventListener('input', function () {
    const query = searchInput.value;
    const filteredProducts = searchProducts(query, products);
    displayProducts(productList, filteredProducts);
});

displayProducts(productList, products);
