
// Connect to the API and display the name and price property of each result.

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";
const productsContainer = document.querySelector(".result-container");
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

function searchPrice(data, targetElement) {
    // get both search inputs
    const searchPrices = document.querySelector("input#prices");

    // this is the function that both inputs will call on keyup
    function filterPrice() {
        // get the field data attribute
        const field = event.target.dataset.field;

        // if the author input is active clear the publisher input
        if (field === "price") {
            searchPrices.value = "";
        }

        // if the publisher input is active clear the author input

        // get the trimmed, lowercased input value
        const searchValue = event.target.value.trim().toLowerCase();

        // filter the data array
        // use square brackets to get the object property by the field variable
        const filteredData = data.filter(function (item) {
            if (item[field].toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        // render new html
        createPrice(filteredData, targetElement);
    }

    searchPrices.addEventListener("keyup", filterPrice);
}
