// Const - Var
// Tại sao khi khai báo , ta nên sử dụng "const" thay vì "let" cho đối tượng trong js

// 1. var cho phép tái định nghĩa, còn let thì không
// VD:
let a = 10;
console.log(a);
a = 15;
console.log(a);     // a = 15

// 2. Const
const nhietDo = 100;
nhietDo = 50;
console.log(nhietDo);

// 3. Let
let person = {
    name: "John",
    age: 30,
};

// let chỉ khai báo được duy nhất 1 lần các thuộc tính
// let person = 1 *LỖI không thể khai báo
// Nhưng chúng ta vẫn có thể gán giá trị cho nó
person = 5;
console.log(person)
// 5 -> Đối tượng bị ghi đè

// Để tránh điều này xảy ra, thường sử dụng const để khai báo đối tượng
const person2 = {
    name: "Bao",
    age: 16,
};
console.log(person2)
// Không được ghi đè đối tượng khi đã khai báo
// Thêm sửa xóa bình thường

person2.isAdmin = true;
person2.name = "Tom";
delete person2.age

console.log(person2)