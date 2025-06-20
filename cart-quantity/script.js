//console.log("Hello Mouni!");

let cartQuantity = localStorage.getItem("cartQuantity");

if (!cartQuantity) {
  localStorage.setItem("cartQuantity", 0);
  cartQuantity = 0;
}
cartQuantity = cartQuantity || 0;

function updateQuantity(value) {
  cartQuantity = cartQuantity + value;
}

function displayQuantity(value) {
  console.log(`cart: ${cartQuantity}`);
}
