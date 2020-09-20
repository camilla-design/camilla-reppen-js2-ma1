export function displayMessage(type, message) {
    const element = document.querySelector(".product-container");

    element.innerHTML += `<div class="message ${type}">${message}</div>`;
}