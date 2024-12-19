
function init() {
    getRestaurantName();
    getRating();
    getProvidersPicture();
}

function getRestaurantName() {
    document.getElementById("restaurantName").innerHTML = providers[0].name;
}

function getRating() {
    document.getElementById("ratingBar").innerHTML = `Bewertung : ${providers[0].review}%`;
}

function getProvidersPicture() {
    document.getElementById("restaurantPicture").innerHTML = `<img src="./${providers.picture}">`;
}