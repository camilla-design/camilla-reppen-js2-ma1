import createPrice from "./createPrice.js";

export default function searchPrice(data, targetElement) {
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