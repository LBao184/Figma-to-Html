// Ép kiểu dữ liệu trong JavaScript
let numberA = prompt("Mời nhập số cụ thể của số A: ");
console.log(typeof numberA);
// Mặc định dữ liệu từ prompt là chuỗi (string)

// Thực hiện tính toán (chưa ép kiểu)
let numberB = 5;
console.log("Kết quả phép cộng chưa ép kiểu: " + (numberA + numberB)); // Kết quả là chuỗi nối 85

// cộng A và B sau khi ép kiểu
let kq = numberA + numberB; // Nối chuỗi
console.log("Kết quả phép cộng sau khi ép kiểu: " + kq);
console.log(typeof kq); // Kết quả vẫn là chuỗi (string)

// Các kiểu tính toán khác
console.log ("A -B =", numberA - numberB); // Phép trừ
console.log ("A * B =", numberA * numberB); // Phép nhân
console.log ("A / B =", numberA / numberB); // Phép chia
console.log ("A % B =", numberA % numberB); // Phép chia lấy dư

// Ép kiểu dữ liệu nhập vào Prompt
let numberC = parseInt(prompt("Mời nhập số cụ thể của số C: ")); // Ép kiểu về số nguyên
console.log(numberC);
console.log(typeof numberC); // Kiểu dữ liệu sau khi ép kiểu
console.log (numberC + numberB); // Thực hiện phép cộng sau khi ép kiểu

// Hoặc dùng hàm Number() để ép kiểu dữ liệu number
let numberD = Number(prompt("Mời nhập số cụ thể của số D: ")); // Ép kiểu về số thực
console.log(numberD);
console.log(typeof numberD); // Kiểu dữ liệu sau khi ép kiểu
console.log (numberD + numberB); // Thực hiện phép cộng sau khi ép kiểu
