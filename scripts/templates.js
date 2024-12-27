
function dishCardTemplates(dishIndex) {
    return `<div class="dish_card" id="dish${dishIndex}">
        <div class="dish_description">
            <h3 id="dishName${dishIndex}">${dishes[dishIndex].dishName}</h3>
            <span id="dishDescription${dishIndex}">${dishes[dishIndex].description}</span>
            <span class="price" id="dishPrice${dishIndex}">${dishes[dishIndex].price.toFixed(2)} <span class="euro">€</span></span>
        </div>
        <button id="buyDish${dishIndex}" onclick="addToCart(${dishIndex})">
            <img class="btn_img" src="./assets/imgs/plus.png">
        </button>
    </div>`;
}

function getCartTemplate(cartIndex) {
    return `<div class="added_meal">
                        <h5>${cart[cartIndex].dishName}</h5>
                        <div class="customize_cart">
                            <button>-</button>
                            <span>${amounts[cartIndex]} x ${cart[cartIndex].price.toFixed(2)}</span>€
                            <button onclick="addSameMeal${cartIndex}">+</button>
                            <span id="oneMealSum${cartIndex}"></span>
                            <button><img class="btn_img" src="./assets/imgs/trashcan.png"></button>
                        </div>
                    </div>
                    <div class="divide"></div>`;
}

function totalSumTemplate(cartIndex) {
return `<table>
    <tr>
        <td>Zwischensumme</td>
        <td id="totalMealPrice${cartIndex}" >60,00</td>
        <td>€</td>
    </tr>
    <tr>
        <td>Lieferkosten</td>
        <td>5,00</td>
        <td>€</td>
    </tr>
    <tr class="accentuate">
        <td>Gesamt</td>
        <td>100,00</td>
        <td>€</td>
    </tr>
    </table>
    <button id="payBtn">Bezahlen</button>`;
}