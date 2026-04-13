🧠 1. Object trong JS là gì?

Object (đối tượng) là một kiểu dữ liệu dùng để lưu trữ nhiều giá trị dưới dạng cặp key – value.

👉 Hiểu đơn giản:

Object giống như một “hộp” chứa nhiều thông tin có tên.

📦 2. Cách khai báo Object
✔ Cách 1: Dùng dấu {} (phổ biến nhất)
let person = {
    name: "Bao",
    age: 18,
    isStudent: true
};
🔑 3. Truy cập thuộc tính
✔ Cách 1: Dùng dấu chấm .
console.log(person.name); // Bao
✔ Cách 2: Dùng dấu []
console.log(person["age"]); // 18

👉 Khi key là biến → phải dùng []

✏️ 4. Thêm / sửa / xóa thuộc tính
✔ Thêm
person.gender = "male";
✔ Sửa
person.age = 20;
✔ Xóa
delete person.isStudent;
🔁 5. Duyệt Object
for (let key in person) {
    console.log(key + ": " + person[key]);
}
⚙️ 6. Object có thể chứa gì?

Object có thể chứa:

Số, chuỗi, boolean
Mảng
Object khác
Hàm (method)
Ví dụ:
let student = {
    name: "Bao",
    scores: [8, 9, 10],
    greet: function() {
        console.log("Hello!");
    }
};

student.greet(); // gọi hàm
🧩 7. Một số hàm hữu ích
✔ Lấy danh sách key
Object.keys(person);
✔ Lấy value
Object.values(person);
✔ Lấy cả key + value
Object.entries(person);
⚠️ 8. Lưu ý quan trọng
Object trong JS không có thứ tự cố định
Key thường là string
Object là reference type (truyền tham chiếu)
let a = {x: 1};
let b = a;

b.x = 10;
console.log(a.x); // 10 (bị thay đổi luôn)
🎯 9. Khi nào dùng Object?

Dùng khi cần lưu thông tin có cấu trúc

👉 Ví dụ:

Thông tin người dùng
Sản phẩm
Bài viết
🔥 10. Ví dụ thực tế
let product = {
    name: "Laptop",
    price: 1500,
    brand: "Dell"
};

console.log("Tên:", product.name);
console.log("Giá:", product.price);
✅ Tóm lại
Object = tập hợp key-value
Dùng {} để tạo
Truy cập bằng . hoặc []
Có thể chứa mọi kiểu dữ liệu
Rất quan trọng trong JS 🚀