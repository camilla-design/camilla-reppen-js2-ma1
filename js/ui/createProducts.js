import { displayMessage } from "./displayMessage.js";
import { errorMessage } from "../constants/messages.js";

export function createProducts(products) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    if(products.length === 0) {
        displayMessage("", errorMessage);
    }

    for (let i = 0; i < products.length; i++) {
        productContainer.innerHTML += `<div class="products">
        <h4>${products[i].name}</h4>
        <p>${products[i].price}</p>
    </div>`;
    }  
}