//console object methods
console.log("Hello JS!");
console.warn("This is a warning");
console.error("Something went wrong!");

console.table([{name: "Alice"},{name: "Bob"}]);

console.time("loop");
for(let i = 0; i < 1000000; i++) { }
console.timeEnd("loop");