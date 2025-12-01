// Hàm NaN: Not a Number
/*
    - NaN là một giá trị đặc biệt trong JavaScript, đại diện cho "Not a Number" (không phải là một số).
    - NaN thường xuất hiện khi thực hiện các phép toán không hợp lệ hoặc không thể chuyển đổi một giá trị thành số.
*/
// Ví dụ về NaN
let x = "Hello" / 2;
console.log(x); // NaN
console.log(typeof x); // number

// Kiểm tra giá trị NaN
let y = aBc;
console.log(isNaN(y)); // true
console.log(isNaN(123)); // false

// Các ví dụ khác về NaN
console.log (isNaN("abc")); // true
console.log (isNaN(undefined)); // true
console.log (isNaN(NaN)); // true
console.log (isNaN(123)); // false
console.log (isNaN("123")); // false
console.log (isNaN(true)); // false
console.log (isNaN(false)); // false

// Chuyển đổi True sang số
let cvT = Number(true);
console.log(cvT); // 1
console.log (isNaN(null)); // false
console.log (isNaN("")); // false
console.log (isNaN(" ")); // false

// Number.isNaN(): Kiểm tra giá trị NaN chính xác hơn
console.log (Number.isNaN(NaN)); // true
console.log (Number.isNaN("Shy" / "red")); // true
let check = "Shy" / "red";
console.log (('Giá trị của biến check:') + check);

console.log (Number.isNaN(0 / 0)); // true
console.log (Number.isNaN({})); // false
console.log (Number.isNaN("Shyred")); // false