console.log("car.js is running...");


module.exports = {
	color: "Blue",
	convertible: true,
	speed: 0,
	accelerate(speed) {
		this.speed += speed;
		console.log("The car is accelerating!")
		return console.log(`speed was: ${this.speed -= speed}, speed is now: ${this.speed += speed}`)
	},
	decelerate(speed) {
		this.speed -= speed;
		console.log("The car is decelerating...")
		return console.log(`speed was: ${this.speed += speed}, speed is now: ${this.speed -= speed}`)
	}
}

module.exports.accelerate(20);

module.exports.decelerate(5);



























