// Dot Notation - Bracket Notation
// Dot Notation: Truy xuất thông tin, nói cách khác là truy cập thuộc tính, gán thay đổi giá trị và gọi phương thức

// Ví dụ:
// Truy xuất thông tin:
let student = {
    name: "An",
    age: 18
};

console.log(student.name); // "An"
console.log(student.age);  // 18

// Gán, Thay đổi giá trị
student.age = 20;  // sửa giá trị
student.gender = "Nam"; // thêm thuộc tính mới

// Gọi phương thức:
let student2 = {
    name: "Bao",
    introduce: function() {
        return "Xin chào";
    }
};

console.log(student.introduce()); // "Xin chào"

// _______________________________________________________________________________________________________________
// Bracket Notation: Giống như Dot Notation nhưng linh hoạt hơn
// Ví dụ:
// 1. Truy cập thuộc tính
let student3 = {
    name: "Hieu",
    age: 20
};

console.log(student3["name"]); // "Hieu"
console.log(student3["age"]);  // 20

// 2. Dùng với Biến
let key = "name";
console.log(student3[key]); // "Hieu"

// 3. Thêm, sửa thuộc tính
student3["age"] = 25;        // sửa
student3["gender"] = "Nam";  // thêm

// 4. Dùng khi Key không hợp lệ cho Dot Notation.
let obj = {
    "full name": "Nguyen Van A",
    "1st": "First"
};

console.log(obj["full name"]); // đúng
// obj.full name ❌ (sai cú pháp)

console.log(obj["1st"]); // đúng
// obj.1st ❌ (sai)