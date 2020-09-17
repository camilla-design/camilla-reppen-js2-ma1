import { renderProducts } from "./ui/renderProducts.js";
import { searchPrice } from "./ui/searchPrice.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function getProduct() {
    try { 
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data);
        
        const products = json.data;

        renderProducts(products);
        searchPrice (products);

    } catch (error) {
        console.log(error);
    }
}

getProduct();