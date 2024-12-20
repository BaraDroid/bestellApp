
function init() {
    getRestaurantName();
    getRating();
    getProvidersPicture();
    renderDishes();
}

function getRestaurantName() {
    document.getElementById("restaurantName").innerHTML = restaurants[0].name;
}

function getRating() {
    document.getElementById("ratingBar").innerHTML = `Bewertung : ${restaurants[0].review}%`;
}

function getProvidersPicture() {
    document.getElementById("restaurantPicture").innerHTML = `<img src="${restaurants[0].picture}">`;
}

function renderDishes() {
    let contentRef = document.getElementById("dishOffer");

    for (let dishIndex = 0; dishIndex < restaurants[0].dishes.length; dishIndex++) {
        contentRef.innerHTML += dishCardTemplates(dishIndex);
    }
}
