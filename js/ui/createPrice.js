import displayMessage from "./displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "../constants/messages.js";

export default function createPrice(data, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = "";

    if (data.length === 0) {
        displayMessage("", EMPTY_FILTER_RESULTS, targetElement);
    }

    for (let i = 0; i < data.length; i++) {
        element.innerHTML += `<div class="prices">
                                <p><i>${data[i].name}</i></p>                                    
                            </div>`;
    }
}