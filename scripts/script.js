
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
    if(cart.findIndex((element) => element.dishName == dishes[indexMeal].dishName) < 1) {
        putInCart();
    }
    else {
        let newMealAmount = amounts[indexMeal];
        newMealAmount++;
        amounts.splice(indexMeal, 1, newMealAmount);
    }
}

function putInCart(indexMeal) {
    let myMeal = dishes[indexMeal];
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
    //getMealPrice();
    document.getElementById("totalSum").innerHTML = "";
    document.getElementById("totalSum").innerHTML = totalSumTemplate();
    //getTotalMealPrice(index);
}



// function getMealPrice() {   //hier will ich eine Gesamtsumme haben, von allen gleichen Gerichten
//     for (let priceIndex = 0; priceIndex < cart.length; priceIndex++) {
//         let mealPrice;
//         mealPrice += cart[priceIndex].price;
//         console.log(mealPrice);       //wirft NaN raus
//     }
// }

//Position von irgendwelchem Essen kriegen (also index)? takze to snad ani nepotrebuju, kdyz
//mam indexy....diky for-schleife
//totalmealprice teprve, az budu mit array mit den prices, ktery pak sectu
