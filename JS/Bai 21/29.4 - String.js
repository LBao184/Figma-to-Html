// Concat - toUpperCase - toLowerCase - charAt

// 1. Concatenation (Nối chuỗi)
let str1 = "Hello";
let str2 = "World";
let result = str1 + ", " + str2 + "!";
console.log(result); // Kết quả: "Hello, World!"

// or

let firstName = "Le";
let lastName = "Bao";
let fullName = firstName + " " + lastName;
console.log(fullName); // Kết quả: "Le Bao"

// 2. toUpperCase - toLowerCase - Chuyển đổi chữ hoa và chữ thường
let str = "Hello, World!";
console.log(str.toUpperCase()); // Kết quả: "HELLO, WORLD!"
console.log(str.toLowerCase()); // Kết quả: "hello, world!"

// 3. charAt - Lấy ký tự tại một vị trí cụ thể trong chuỗi
let s = "JavaScript";
console.log(s.charAt(0)); // Kết quả: "J"
console.log(s.charAt(4)); // Kết quả: "S"
console.log(s.charAt(10)); // Kết quả: "" (vị trí vượt quá độ dài chuỗi)