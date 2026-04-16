// Class Inharitance: Kế thừa

// Định nghĩa lớp cơ sở School
class School {
    constructor(id, name, birthYear) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    };
    // Phương thức của lớp School
    calcAge(currentYear) {
        return currentYear - this.birthYear;
    };
};
// Tạo đối tượng của lớp School
    const p1 = new School("P18042010", "Le Bao", 2010);
// Truy cập thuộc tính của class School
    console.log(p1.name)
    console.log(p1.id);
    console.log(p1.birthYear);
    console.log(p1.calcAge(2026));

// _________________ Extends School _____________________
// Lớp Student - kế thừa từ lớp School
class Student extends School {
    constructor(id, name, birthYear, major){
        super(id, name, birthYear);
        this.major = major
    };
    // Phương thức của lớp Student
    study() {
        console.log(`${this.name} is studying ${this.major}`)
    }
}
// Tạo đối tượng Sub Class Student
const sv1 = new Student("18082010", "Xuyen Chi", 2012 ,"CNTT");
// Truy cập thuộc tính của class Student
    console.log(sv1.name)
    console.log(sv1.id);
    console.log(sv1.birthYear);
    console.log(sv1.calcAge(2026));
    console.log(sv1.major);
    sv1.study();
    console.log(sv1);


// Bài tập:
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