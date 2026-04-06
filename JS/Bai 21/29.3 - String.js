// Trim - TrimEnd - TrimStart


let str = "   Hello, World!   ";

// Trim: xóa khoảng trắng ở đầu và cuối chuỗi
console.log(str.trim()); // "Hello, World!"

// TrimStart: xóa khoảng trắng ở đầu chuỗi
console.log(str.trimStart()); // "Hello, World!   "

// TrimEnd: xóa khoảng trắng ở cuối chuỗi
console.log(str.trimEnd()); // "   Hello, World!"