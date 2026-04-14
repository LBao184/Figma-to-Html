// Attribute (Thuộc tính): Thêm - Sửa - Xóa
// Khởi tạo đối tượng
let student = {
    name: "Bao",
    age: 16
};

// 1. Thêm thuộc tính:
student.email = "lethienbao1842010@gmail.com";
student["game"] = "Valorant.riot";

// 2. Xuất đối tượng:
console.log(student);
console.log(student.email);
console.log(student.game);

// 3. Xóa thuộc tính:
delete student.email;
console.log(student);

// 4. Sửa thuộc tính:
student.game = "Valor";
console.log(student);