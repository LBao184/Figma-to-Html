// Instance Method JS:  là phương thức (function) thuộc về từng object (instance) được tạo ra từ class hoặc constructor.

// Hiểu đơn giản:
// Instance Method = Hàm mà bạn gọi thông qua 1 Object cụ thể
// 🔥 Ví dụ:
class Student {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Xin chào, tôi là ${this.name}`;
    }
}

let s1 = new Student("An");
let s2 = new Student("Bình");

console.log(s1.sayHello());
console.log(s2.sayHello());

/*
👉 sayHello() là instance method
Gọi bằng: s1.sayHello(), s2.sayHello()
Mỗi object dùng được method này
*/

// 🔹 Nó nằm ở đâu?
/* 
👉 Dù nhìn như nằm trong object, nhưng thực tế:
Instance method được lưu ở prototype
*/
Student.prototype.sayHello;
// Tất cả instance dùng chun để tiết kiệm bộ nhớ


// Static Method: là phương thức thuộc về class, không thuộc về từng object (instance).
// Hiểu đơn giản:
    // Static Method = gọi trực tiếp từ class, không cần tạo Object
// 🔥 Ví dụ:
class Student {
    static sayHi() {
        return "Xin chào!";
    }
}

console.log(Student.sayHi()); // ✅ đúng

// Không cần:
let s = new Student();
s.sayHi(); // ❌ lỗi

// Khi nào dùng Static Method?
// ✅ 1. Khi function không phụ thuộc vào dữ liệu của object
// Ví dụ:
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathHelper.add(2, 3)); // 5
// Không cần this - không cần instance

// ✅ 2. Khi muốn tạo “hàm tiện ích” (utility)
// Ví dụ:
class User {
    constructor(name) {
        this.name = name;
    }
    static isValidName(name) {
        return name.length > 2;
    }
}
console.log(User.isValidName("An")); // false