import { url } from "./constants/settings.js";
import { createProducts } from "./ui/createProducts.js";
import { displayMessage } from "./ui/displayMessage.js";
import { searchPrice } from "./ui/searchPrice.js";

async function getProduct() {
    try { 
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data);
        
        const products = json.data;

        createProducts(products);
        searchPrice (products);

    } catch (error) {
        console.log(error);
        displayMessage("error", error);
    }
}

getProduct();
