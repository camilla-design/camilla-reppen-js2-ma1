import { renderProducts } from "./renderProducts.js";

export function searchPrice(products) {
    const priceSearch = document.querySelector(".search");

    priceSearch.onkeyup = function (event) {
        const searchValue = event.target.value.trim();

        const filterPrice = products.filter(function (product) {
           if(product.price <= searchValue) {
               return true;
           }
           
        }
        );

        renderProducts(filterPrice);
    };
}