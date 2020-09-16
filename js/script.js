// Connect to the API and display the name and price property of each result.

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";
const productsContainer = document.querySelector(".products");
const search = document.querySelector(".search");

async function callApi() {
    try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    createProducts(json.data);
} catch (error) {
    console.log(error);
    productsContainer.innerHtml = displayMessage("error", error);
}
}

callApi();

function displayMessage(type, message) {
    return `<div class="message ${type}">${message}</div>`;
}

function createProducts(data) {
    productsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        productsContainer.innerHTML += `<div class="product">
                                        <h4>${data[i].name}</h4>
                                        <p>${data[i].price}$</p>
                                        </div>`;
    }
    
}

