// Toán tử 3 ngôi
let n = 10;
let message = n >= 0 ? "Số dương hoặc bằng 0" : "Số âm";
console.log(message);

// Ví dụ 2: Kiểm tra số chẵn lẻ
let num = parseInt(prompt("Nhập một số nguyên:"));
let result = (num % 2 === 0) ? "Số chẵn" : "Số lẻ";
console.log(result);

// Bài tập thực hành
let core = parseFloat(prompt("Nhập điểm số của bạn:"));
// cách 1:
// let check = core >= 8 ? "Giỏi" : 
//                     8 > core && core >= 6.5 ? "Khá" : 
//                     6.5 > core && core >= 5 ? "Trung bình" : "Yếu";

// cách 2:
let ck = core>=8 ? "Giỏi" :( core>=6.5 ? "Khá" : (core>=5 ? "Trung bình" : "Yếu"));
console.log("Xếp loại của bạn là: " + ck); 