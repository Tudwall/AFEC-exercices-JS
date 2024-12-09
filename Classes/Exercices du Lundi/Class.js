class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	surface() {
		return this.width * this.height;
	}
	perimeter() {
		return 2 * (this.width + this.height);
	}
}

let rect = new Rectangle(10, 20);
console.log(rect.surface);
