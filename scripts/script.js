
function init() {
    renderDishes();
}

function renderDishes() {
    let contentRef = document.getElementById("dishOffer");

    for (let dishIndex = 0; dishIndex < restaurants[0].dishes.length; dishIndex++) {
        contentRef.innerHTML += dishCardTemplates(dishIndex);
    }
}

function insertInCart() {

}