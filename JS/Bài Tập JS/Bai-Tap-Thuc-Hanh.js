// Bài 1: Tính chu vi, diện tích hình tròn
let r = prompt("Nhập bán kính hình tròn:");
let pi = 3.14;
let chuVi = 2 * pi * r;
let dienTich = pi * r * r;
console.log("Chu vi hình tròn là: " + chuVi);
console.log("Diện tích hình tròn là: " + dienTich);

// Bài 2: Tính diện tích, chu vi hình chữ nhật
let length = prompt("Nhập chiều dài hình chữ nhật:");
let width = prompt("Nhập chiều rộng hình chữ nhật:");
let chuViHCN = 2 * (length + width);
let dienTichHCN = length * width;
console.log("Chu vi hình chữ nhật là: " + chuViHCN);
console.log("Diện tích hình chữ nhật là: " + dienTichHCN);
// Làm tròn 2 số đằng sau dấu phẩy
// Ví dụ a = 3.14159 => làm tròn thành 3.14
// cú pháp: toFixed(số chữ số muốn làm tròn)
//  a = a.toFixed(2);
//  console.log(a);

// Bài 3: Tính điểm trung bình 3 môn TVA
let T = Number(prompt("Nhập điểm Toán:"));
let V = Number(prompt("Nhập điểm Văn:"));
let A = Number(prompt("Nhập điểm Anh:"));
let DTB = (T + V + A) / 3;
console.log("Điểm trung bình 3 môn TVA là: " + DTB.toFixed(2));