
function dishCardTemplates(dishIndex) {
    return `<div class="dish_card" id="dish${dishIndex}">
        <div class="dish_description">
            <h3 id="dishName${dishIndex}">${restaurants[0].dishes[dishIndex].dishName}</h3>
            <span id="dishDescription${dishIndex}">${restaurants[0].dishes[dishIndex].description}</span>
            <span id="dishPrice${dishIndex}">${restaurants[0].dishes[dishIndex].price.toFixed(2)} €</span>
        </div>
        <button id="buyDish${dishIndex}">
            <img class="btn_img" src="./assets/imgs/plus.png">
        </button>
    </div>`;
    // `<div class="dish_card" id="dish0">
    //     <div class="dish_description">
    //         <h3 id="dishName0"></h3>
    //         <span id="dishDescription0"></span>
    //         <span id="dishPrice0"></span>
    //     </div>
    //     <button id="buyDish0">
    //         <img class="btn_img" src="./assets/imgs/plus.png">
    //     </button>
    // </div>`;
}

console.log(restaurants[0].dishes[2].dishName);
console.log(restaurants[0].dishes[2].description);
console.log(restaurants[0].dishes[2].price.toFixed(2));