console.log("car.js is running...");


module.exports = {
	color: "Blue",
	convertible: true,
	speed: 0,
	accelerate() {
		this.speed += 10;
	},
	decelerate() {
		this.speed -= 5;
	}
}





























