// Viết chương trình tính diện tích hình vuông ,hình chữ nhật qua mô hình kế thừa class
// Chữa bài:
// Class cha
class Geometry {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    // diện tích hình vuông (length = width)
    areaOfSquare() {
        return this.length * this.length;
    }
}

// Class con: hình chữ nhật
class Rectangle extends Geometry {
    constructor(length, width) {
        super(length, width);
    }

    areaOfRectangle() {
        return this.length * this.width;
    }
}

// Test hình vuông
const square = new Geometry(5, 5);
console.log("Diện tích hình vuông:", square.areaOfSquare());

// Test hình chữ nhật
const rect = new Rectangle(10, 4);
console.log("Diện tích hình chữ nhật:", rect.areaOfRectangle());