
function init() {
    renderDishes();
}

function renderDishes() {
    let contentRef = document.getElementById("dishOffer");

    for (let dishIndex = 0; dishIndex < dishes.length; dishIndex++) {
        contentRef.innerHTML += dishCardTemplates(dishIndex);
    }
}

function addToCart(indexMeal) {
    styleCart(); 
    getTheMeal(indexMeal);
    renderCart();
    oneMealTotal(indexMeal);
    getBillInfo();
}

function getTheMeal(indexMeal) {
    if(cart.findIndex((element) => element.dishName == dishes[indexMeal].dishName) == -1) {
        putInCart(indexMeal);
    }
    else {
        let newMealAmount = amounts[indexMeal];
        newMealAmount = newMealAmount + 1;
        amounts.splice(indexMeal, 1, newMealAmount);
    }
}

function putInCart(index) {
    let myMeal = dishes[index];
    cart.push(myMeal);
    amounts.push(1);
}

function styleCart() {
    if (cart.length < 1) {
    document.getElementById("emptyCart").classList.add("d_none");
    document.getElementById("shoppingCart").classList.remove("cart_content_empty");
    document.getElementById("shoppingCart").classList.add("cart_content_full");
}
}

function renderCart() {
    let cartContent = document.getElementById("shoppingCart");
    cartContent.innerHTML = "";
    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
        cartContent.innerHTML += getCartTemplate(cartIndex);
}
}

function getBillInfo() {
    document.getElementById("totalSum").innerHTML = "";
    document.getElementById("totalSum").innerHTML = totalSumTemplate();
}

function oneMealTotal(cartIndex) {
    let oneMealSumPrice = document.getElementById(`oneMealSum${cartIndex}`);
    oneMealSumPrice.innerHTML = "";
    let toPaySum = amounts[cartIndex] * dishes[cartIndex].price;
    oneMealSumPrice.innerHTML = toPaySum.toFixed(2);
}

// function addSameMeal(indexMeal) {
//     let newMealAmount = amounts[indexMeal];
//         newMealAmount = newMealAmount + 1;
//         amounts.splice(indexMeal, 1, newMealAmount);
//         oneMealTotal(cartIndex);
// }

