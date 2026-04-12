// Hàm Math.random() trong JS
/* Hàm Math.random() trả về một số thập phân ngẫu nhiên trong khoảng từ 0 (bao gồm) đến 1 (không bao gồm). 
       Math.floor() được sử dụng để làm tròn số xuống số nguyên gần nhất.

*/
// 1. Random từ 0 - 1
let randomNum = Math.random();
console.log("Số ngẫu nhiên từ 0 đến 1: " + randomNum);  // Kết quả in ra sẽ là số thập phân từ 0 đến 1

// 2. Random từ 0 - 100
let random0to100 = Math.floor(Math.random() * 100);
console.log("Số ngẫu nhiên từ 0 đến 100: " + random0to100);  // Kết quả in ra sẽ là số nguyên từ 0 đến 99 

// 2. Random từ 0 - N (N là số nguyên dương)
let N = 10; // Ví dụ N = 10
let tu0denN = Math.floor(Math.random() * N);
console.log("Số ngẫu nhiên từ 0 đến " + (N - 1) + ": " + tu0denN);  