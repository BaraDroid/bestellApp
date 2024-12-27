
let dishes = [
            {
                "dishName": "Spaghetti mit Fleischbällchen",
                "description": "Traditionelle italienische Spaghetti, serviert mit saftigen Fleischbällchen in einer würzigen Tomatensauce.",
                "price": 12.90
            },
            {
                "dishName": "Linguine al Limone et Pecorino",
                "description": "Frische Linguine in einer cremigen Sauce aus Zitronen und Pecorino-Käse, abgerundet mit frischen Kräutern.",
                "price": 14.50
            },
            {
                "dishName": "Pasta Salat Caprese mit gegrilltem Hähnchen",
                "description": "Ein frischer Pastasalat mit Tomaten, Mozzarella und Basilikum, serviert mit gegrilltem Hähnchen und Balsamico-Dressing.",
                "price": 11.90
            },
            {
                "dishName": "Pizza Margherita",
                "description": "Klassische Pizza mit Tomatensauce, Mozzarella, frischem Basilikum und einem Hauch von Olivenöl.",
                "price": 8.50
            },
            {
                "dishName": "Pizza Quattro Stagioni",
                "description": "Pizza mit vier Belägen: Schinken, Pilze, Artischocken und schwarze Oliven, auf einer Tomatensauce-Basis.",
                "price": 10.90
            },
            {
                "dishName": "Pizza Funghi",
                "description": "Pizza mit einer reichhaltigen Tomatensauce, Mozzarella und frischen Champignons.",
                "price": 9.50
            },
            {
                "dishName": "Pinsa Romana",
                "description": "Ein traditioneller römischer Fladen aus einer besonderen Teigmischung, belegt mit Tomaten, Mozzarella und frischen Kräutern.",
                "price": 11.00
            },
            {
                "dishName": "Torta Caprese nach Art des Hauses",
                "description": "Ein köstlicher, saftiger Schokoladenkuchen aus Mandeln, serviert mit einer Kugel Vanilleeis und Schokoladensauce.",
                "price": 6.90
            }
        ];


// const myChoosedMeal = (dishes.dishName[index]) => dishes.dishName[index] == true;

// console.log(dishes.findIndex(myChoosedMeal));

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));

//bei dem Dialog "fertig" cart leeren
//responsive cart nur andere Klasse - der gleiche Warenkorb, aber verhält sich anders

let cart = [];

let amounts = [];

let sliderPictures = [
    "../assets/imgs/pasta_salad.jpg",
    "../assets/imgs/pizza_plate.jpg",
    "../assets/imgs/pizza_plate_divided.jpg"
];