// split - separator - limit

// 1. split - Tách chuỗi thành một mảng dựa trên dấu phân cách
let str = "Hello, World!";
let arr = str.split(", ");
console.log(arr); // Kết quả: ["Hello", "World!"]

// 2. separator - Dấu phân cách để tách chuỗi
let str3 = "apple-orange-banana";
let arr3 = str3.split("-");
console.log(arr3); // Kết quả: ["apple", "orange", "banana"]

// 3. limit - Giới hạn số lượng phần tử trong mảng kết quả
let str4 = "apple-orange-banana-grape";
let arr4 = str4.split("-", 2);
console.log(arr4); // Kết quả: ["apple", "orange"]