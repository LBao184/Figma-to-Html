//  indexOf - lastIndexOf - includes

// 1. indexOf - Tìm vị trí của một chuỗi con
let str = "Hello, World!";
console.log(str.indexOf("o")); // Kết quả: 4 (vị trí của chữ 'o' đầu tiên)
console.log(str.indexOf("World")); // Kết quả: 7 (vị trí của chuỗi "World")
console.log(str.indexOf("JavaScript")); // Kết quả: -1 (không tìm thấy chuỗi con)

// 2. lastIndexOf - Tìm vị trí của một chuỗi con từ cuối chuỗi
let str2 = "Hello, World! Hello!";
console.log(str2.lastIndexOf("Hello")); // Kết quả: 14 (vị trí của chữ 'Hello' cuối cùng)
console.log(str2.lastIndexOf("o")); // Kết quả: 17 (vị trí của chữ 'o' cuối cùng)

// 3. includes - Kiểm tra xem chuỗi có chứa một chuỗi con hay không
let str3 = "Hello, World!";
console.log(str3.includes("World")); // Kết quả: true
console.log(str3.includes("JavaScript")); // Kết quả: false

// *lưu ý:
// ví dụ: cho chuỗi "LeBao"
/*
L: vị trí 0
e: vị trí 1
B: vị trí 2
a: vị trí 3
o: vị trí 4
*/