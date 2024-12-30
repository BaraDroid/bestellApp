
function init() {
    renderDishes();
    renderEmptyCart();
}

function renderDishes() {
    let contentRef = document.getElementById("dishOffer");

    for (let dishIndex = 0; dishIndex < dishes.length; dishIndex++) {
        contentRef.innerHTML += dishCardTemplates(dishIndex);
    }
}

function renderEmptyCart() {
    let contentRef = document.getElementById("shoppingCart");
    contentRef.innerHTML = emptyCartTemplate();
}

function addToCart(indexMeal) {
    getTheMeal(indexMeal);
    renderCart();
    getBillInfo();
    getFinalPrice();
}

function getTheMeal(indexMeal) {
    let dishIndex = cart.findIndex((element) => element.dishName == dishes[indexMeal].dishName);
    if(dishIndex == -1) {
        putInCart(indexMeal)
    }
    else {
        amounts[dishIndex] += 1;
    }
}

function putInCart(index) {
    let myMeal = dishes[index];
    cart.push(myMeal);
    amounts.push(1);
}

function renderCart() {
    let cartContent = document.getElementById("shoppingCart");
    cartContent.classList.remove("cart_content_empty");
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
    getFinalPrice();
}

function removeSameMeal(index) {
    let newAmount = amounts[index] -= 1;
    document.getElementById(`oneMealAmount${[index]}`).innerHTML = `${newAmount}`;
    oneMealTotal(index);
    getFinalPrice();
}
//nefunguje, pze pri pridani se zase nastavi nula, to se musi vymyslet, aby se to uplne vymazalo, ne jenom pri pozici nula se stane totok a totok


function placeOrder() {
    document.getElementById("confirmOrder").classList.remove("d_none");
    cart = [];
    renderCart();
    document.getElementById("shoppingCart").classList.add("cart_content_empty");
    document.getElementById("totalSum").innerHTML = "";
}

function closePlaceOrderDialog() {
    document.getElementById("confirmOrder").classList.add("d_none");
}

function getFinalPrice() {
    let finalPrice = 0;
for (let y = 0; y < cart.length; y++) {  
        finalPrice += amounts[y] * cart[y].price;
        document.getElementById("totalMealPrice").innerHTML = finalPrice.toFixed(2);
        document.getElementById("withDeliveryCosts").innerHTML = (finalPrice + 5).toFixed(2);
}  
}

function deleteAll(cartIndex) {     //pokud bude v cart jen jedna polozka
    cart.splice(cartIndex, 1);
    if (cart.length == 0) {
    renderEmptyCart();
    document.getElementById("shoppingCart").classList.add("cart_content_empty");
    document.getElementById("totalSum").innerHTML = "";
    }
    else {
        renderCart();
    }
}
