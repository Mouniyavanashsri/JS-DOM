const jsObject = {
  name: "Mouniyavanashsri",
  age: 20,
  display: function () {
    console.log("Hello");
  },
};

//Javascript Object Notation
let jsonObject = {
  "name": "Mouniyavanashsri",
  "age": 20,
};

//methods(function inside objects) are not support

//JSON Methods
let stringJSON = JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON = JSON.parse(stringJSON);
console.log(normalJSON);
console.log(typeof normalJSON);

//localstorage
localStorage.setItem("username", "Mouniyavanashsri");
let item = localStorage.getItem("username");
console.log(item);

localStorage.removeItem("username");
let item2 = localStorage.getItem("username");
console.log(item2);

//sessionStorage
sessionStorage.setItem("username", "John Doe");
