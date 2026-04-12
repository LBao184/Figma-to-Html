// Toán tử (Arithmetic) trong JavaScript
// Phép tính
/*
=
+=
-=
*=
/=
%=
*/

// CT
/*
x = 1
x += y
x-= y
x *= y
x /= y
x %= y
*/

// YN
/*
x = 1
x = x + y
x = x - y
x = x * y
x = x / y
x = x % y
*/

console.log("Toán tử trong JavaScript");
let m = 10;
m += 5; // m = m + 5
console.log("Giá trị của m sau phép cộng là: " + m);

let n = 20;
n -= 8; // n = n - 8
console.log("Giá trị của n sau phép trừ là: " + n);

let p = 4;
p *= 3; // p = p * 3
console.log("Giá trị của p sau phép nhân là: " + p);

let q = 16;
q /= 4; // q = q / 4
console.log("Giá trị của q sau phép chia là: " + q);

let r = 25;
r %= 7; // r = r % 7
console.log("Giá trị của r sau phép chia lấy dư là: " + r);

// Bài tập vận dụng
let a = 7;
a += 3; // a = a + 3
console.log("Giá trị của a sau phép cộng là: " + a);
let b = 15;
b -= 6; // b = b - 6
console.log("Giá trị của b sau phép trừ là: " + b);
let c = 5;
c *= 4; // c = c * 4
console.log("Giá trị của c sau phép nhân là: " + c);
let d = 12;
d /= 2;
console.log("Giá trị của d sau phép chia là: " + d);

let e = 5;
let f = 2;
e -= (f+1);
console.log("Giá trị của e sau phép trừ là: " + e);