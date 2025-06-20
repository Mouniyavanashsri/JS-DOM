const para = document.getElementById("msg");
console.log(para.innerText);

para.innerText = "This is set via JavaScript";

//const hibutton = document.querySelector("#js-button")
const hibutton = document.querySelector(".js-button");

//Event Listeners
hibutton.addEventListener("click", () => {
  console.log("Hi");
});
