
function init() {
    renderDishes();
}

function renderDishes() {
    let contentRef = document.getElementById("dishOffer");

    for (let dishIndex = 0; dishIndex < restaurants[0].dishes.length; dishIndex++) {
        contentRef.innerHTML += dishCardTemplates(dishIndex);
    }
}

function addToCart(meal) {
    styleCart();
    let myMeal = restaurants[0].dishes[meal];
    cart.push(myMeal);
    console.log(cart);
    renderCart();
    getTotalSum();
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

function getTotalSum() {
    document.getElementById("totalSum").innerHTML = "";
    document.getElementById("totalSum").innerHTML = totalSumTemplate();
}