let cart = [];

function addToCart(item){

cart.push(item);

alert(item + " added to cart 🧋");

}


document.querySelectorAll(".card button").forEach((button,index)=>{

button.onclick = function(){

let drinks = [
"Classic Boba Tea",
"Mango Tropical Tea",
"Chocolate Bubble Tea"
];


addToCart(drinks[index]);

}

});