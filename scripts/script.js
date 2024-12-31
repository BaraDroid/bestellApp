
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
        putInCart(indexMeal);
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
    if (newAmount == 0) {
        deleteAll(index);
        getFinalPrice();
    }
    else {
        oneMealTotal(index);
        getFinalPrice();
    }
}

function placeOrder() {
    document.getElementById("confirmOrder").classList.remove("d_none");
    cart = [];
    renderCart();
    document.getElementById("shoppingCart").classList.add("cart_content_empty");
    document.getElementById("totalSum").innerHTML = "";
}

function closePlaceOrderDialog() {
    document.getElementById("confirmOrder").classList.add("d_none");
    document.getElementById("shoppingCart").classList.add("cart_content_full");
    renderEmptyCart();
}

function getFinalPrice() {
    let finalPrice = 0;
for (let y = 0; y < cart.length; y++) {  
        finalPrice += amounts[y] * cart[y].price;
        document.getElementById("totalMealPrice").innerHTML = finalPrice.toFixed(2);
        document.getElementById("withDeliveryCosts").innerHTML = (finalPrice + 5).toFixed(2);
}  
}

function deleteAll(cartIndex) {
    cart.splice(cartIndex, 1);
    amounts.splice(cartIndex, 1);
    if (cart.length == 0) {
    renderEmptyCart();
    document.getElementById("shoppingCart").classList.add("cart_content_empty");
    document.getElementById("totalSum").innerHTML = "";
    getFinalPrice();
    }
    else {
        renderCart();
        getFinalPrice();
    }
}



//pak teprve funkce na vymazani, az to bude pod jednicku!
// function showCart() {
//     document.getElementById("cartSection").classList.toggle("d_none");
// }

//funkce, ze bude v kosiku nula polozek, aby se to vymazalo
//cart toggle pri media query - function showCart, zkusit to pres minus pri position