// Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên n phần tử, n nhập từ người dùng
// Nhập số phần tử
let n = parseInt(prompt("Nhập số phần tử của mảng:"));

// Khởi tạo mảng
let arr = [];

// Nhập các phần tử
for (let i = 0; i < n; i++) {
    let value = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(value);
}

// In mảng
console.log("Mảng vừa nhập là:", arr);

