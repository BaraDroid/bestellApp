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
  if (JSON.parse(localStorage.length === 0) || cart.length == 0) {
    let contentRef = document.getElementById("shoppingCart");
    contentRef.innerHTML = emptyCartTemplate();
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    amounts = JSON.parse(localStorage.getItem("amounts"));
    renderCart();
    getBillInfo();
    getFinalPrice();
  }
}

function addToCart(indexMeal) {
  getTheMeal(indexMeal);
  renderCart();
  getBillInfo();
  getFinalPrice();
}

function getTheMeal(indexMeal) {
  let dishIndex = cart.findIndex(
    (element) => element.dishName == dishes[indexMeal].dishName);
  if (dishIndex == -1) {
    putInCart(indexMeal);
  } else {
    amounts[dishIndex] += 1;
    localStorage.setItem("amounts", JSON.stringify(amounts));
  }
}

function putInCart(index) {
  let myMeal = dishes[index];
  cart.push(myMeal);
  amounts.push(1);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("amounts", JSON.stringify(amounts));
}

function renderCart() {
  cart = JSON.parse(localStorage.getItem("cart"));
  amounts = JSON.parse(localStorage.getItem("amounts"));
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
  let oneMealPrice = document.getElementById(
    `oneMealPrice${cartIndex}`
  ).innerHTML;
  document.getElementById(`oneMealSum${cartIndex}`).innerHTML = (
    portions * oneMealPrice
  ).toFixed(2);
}

function addSameMeal(index) {
  amounts = JSON.parse(localStorage.getItem("amounts"));
  let newAmount = (amounts[index] += 1);
  document.getElementById(`oneMealAmount${[index]}`).innerHTML = `${newAmount}`;
  localStorage.setItem("amounts", JSON.stringify(amounts));
  oneMealTotal(index);
  getFinalPrice();
  event.stopPropagation();
}

function removeSameMeal(index) {
  amounts = JSON.parse(localStorage.getItem("amounts"));
  let newAmount = (amounts[index] -= 1);
  if (newAmount == 0) {
    deleteAll(index);
    getFinalPrice();
  } else {
    document.getElementById(`oneMealAmount${[index]}`).innerHTML = `${newAmount}`;
    localStorage.setItem("amounts", JSON.stringify(amounts));
    oneMealTotal(index);
    getFinalPrice();
  }
  event.stopPropagation();
}

function placeOrder() {
  document.getElementById("confirmOrder").classList.remove("d_none");
  cart = [];
  renderCart();
  document.getElementById("shoppingCart").classList.add("cart_content_empty");
  document.getElementById("totalSum").innerHTML = "";
  event.stopPropagation();
}

function closePlaceOrderDialog() {
  document.getElementById("confirmOrder").classList.add("d_none");
  document.getElementById("shoppingCart").classList.add("cart_content_full");
  localStorage.clear();
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
  getFromLocalStorage();
  deleteItemFromArray(cartIndex);
  setInLocalStorage();
  if (cart.length == 0) {
    renderEmptyCart();
    styleCart();
    getFinalPrice();
    event.stopPropagation();
  } else {
    renderCart();
    getFinalPrice();
    event.stopPropagation();
  }
}

function deleteItemFromArray(cartIndex) {
   cart.splice(cartIndex, 1);
   amounts.splice(cartIndex, 1);
}

function styleCart() {
   document.getElementById("shoppingCart").classList.add("cart_content_empty");
   document.getElementById("totalSum").innerHTML = "";
}

function getFromLocalStorage() {
   cart = JSON.parse(localStorage.getItem("cart"));
   amounts = JSON.parse(localStorage.getItem("amounts"));
}

function setInLocalStorage() {
   localStorage.setItem("cart", JSON.stringify(cart));
   localStorage.setItem("amounts", JSON.stringify(amounts));
}

function showCart() {
  document.getElementById("cartSection").style.top = "0";
}

function hideCart() {
  document.getElementById("cartSection").style.top = "100dvh";
}