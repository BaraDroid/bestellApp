
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
    getBillInfo();
}

function getTheMeal(indexMeal) {
    let dishIndex = cart.findIndex((element) => element.dishName == dishes[indexMeal].dishName);
    if(dishIndex == -1) {
        putInCart(indexMeal)
    }
    else {
           amounts[dishIndex] += 1;
          // document.getElementById(`oneMealSum${cartIndex}`).innerHTML = (amounts[dishIndex] * cart.price).toFixed(2);
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
        oneMealTotal(cartIndex);
}
}

function getBillInfo() {
    document.getElementById("totalSum").innerHTML = "";
    document.getElementById("totalSum").innerHTML = totalSumTemplate();

}

function oneMealTotal(cartIndex) {
    let portions = document.getElementById(`oneMealAmount${cartIndex}`).innerHTML;
    let oneMealPrice = document.getElementById(`oneMealPrice${cartIndex}`).innerHTML;
    document.getElementById(`oneMealSum${cartIndex}`).innerHTML = (portions * oneMealPrice).toFixed(2);
}

function addSameMeal(index) {
    let newAmount = amounts[index] += 1;
    document.getElementById(`oneMealAmount${[index]}`).innerHTML = `${newAmount}`;
    oneMealTotal(index);
}

function deleteSameMeal(index) {
    let newAmount = amounts[index] -= 1;
    document.getElementById(`oneMealAmount${[index]}`).innerHTML = `${newAmount}`;
    oneMealTotal(index)
}

function placeOrder() {
    document.getElementById("confirmOrder").classList.remove("d_none");
    cart = [];
    renderCart();
    document.getElementById("totalSum").classList.add("d_none");
    document.getElementById("shoppingCart").classList.add("cart_content_empty");
    document.getElementById("shoppingCart").classList.remove("cart_content_full");
}

function closePlaceOrderDialog() {
    document.getElementById("confirmOrder").classList.add("d_none");
}

function getFinalPrice() {
    
}