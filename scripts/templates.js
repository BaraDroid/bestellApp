
function dishCardTemplates(dishIndex) {
    return `<div class="dish_card" id="dish${dishIndex}">
        <div class="dish_description">
            <h3 id="dishName${dishIndex}">${restaurants[0].dishes[dishIndex].dishName}</h3>
            <span id="dishDescription${dishIndex}">${restaurants[0].dishes[dishIndex].description}</span>
            <span class="price" id="dishPrice${dishIndex}">${restaurants[0].dishes[dishIndex].price.toFixed(2)} <span class="euro">€</span></span>
        </div>
        <button id="buyDish${dishIndex}">
            <img class="btn_img" src="./assets/imgs/plus.png">
        </button>
    </div>`;
}