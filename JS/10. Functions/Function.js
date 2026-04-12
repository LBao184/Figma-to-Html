// 1 khai báo biến function
function tenFunction() {
    console.log("Đây là function khai báo");
}
// 2 gọi function
tenFunction();

// Function Parameters
let inputName = "Lê Thiên Bảo";
function showName(name) {
    console.log("Tên của bạn là: " + name);
}
showName(inputName);

// Ví dụ 2:
let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
function sum(a, b) {
    let kq = a + b;
    return kq;
}
console.log("Tổng hai số là: " + sum(a, b));

// Function Declaration
// Cú pháp:
function nameFunction(parameters) {
    // code thực thi
    // return giá trị trả về (nếu có)
} 
// Khai báo hàm
function tong(a = 0, b = 0) {
    return a + b;
}
// Gọi hàm
console.log(tong(5, 10)); // 15


// Function Expression
// Cú pháp:
let ten_bien = function(parameters) {
    // code thực thi
    // return giá trị trả về (nếu có)
}

// Khai báo hàm
let tich = function(a = 1, b = 1) {
    return a * b;
}
// Gọi hàm
console.log(tich(5, 10)); // 50

// _____________________________________________________________________________
// Arrow Function
// Cú pháp:
let multiplyArrow = (a,b) => a*b; // ngắn gọn, và thực thi lệnh a*b

// Với trường hợp có nhiều hơn 1 lệnh trong thân hàm
let multiplyAndAddArrow = (a,b) => {
    let product = a * b;
    let sum = a + b;
    return product + sum;
};
// Gọi hàm
console.log(multiplyAndAddArrow(5, 10)); // 65
// _____________________________________________________________________________