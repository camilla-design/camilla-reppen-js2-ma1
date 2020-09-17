

export function renderProducts(productToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    if (productToRender === 0) {
        document.getElementById("error").style.display = "block";
    }

    productToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="products">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
    </div>`;
    });
}
