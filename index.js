console.log("index.js is running...");

const car = require("./car.js");

console.log(`The car's color is ${car.color}`);

car.accelerate();
console.log("The car is accelerating!");

console.log(`The car's speed is now ${car.speed} mph.`);

car.decelerate();
console.log("The car is decelerating...");

console.log(`The car's speed is now ${car.speed} mph.`);



























