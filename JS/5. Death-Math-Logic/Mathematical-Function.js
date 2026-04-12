// Các hàm toán học trong JS
/*
    1. Math.round(x): làm tròn số x đến số nguyên gần nhất
    2. Math.ceil(x): làm tròn số x đến số nguyên lớn hơn gần nhất
    3. Math.floor(x): làm tròn số x đến số nguyên nhỏ hơn gần nhất
    4. Math.abs(x): trả về giá trị tuyệt đối của x
    5. Math.sqrt(x): trả về căn bậc hai của x
    6. Math.pow(x, y): trả về giá trị x mũ y (x^y)
*/

// 1. Hàm Math.round()
let a = 4.3;
let b = 4.6;
console.log(Math.round(a)); // 4
console.log(Math.round(b)); // 5

// 2. Hàm Math.ceil()
console.log(Math.ceil(a)); // 5
console.log(Math.ceil(b)); // 6

// 3. Hàm Math.floor()
console.log(Math.floor(a)); // 4
console.log(Math.floor(b)); // 4

// 4. Hàm Math.abs()
let c = -5;
console.log(Math.abs(c)); // 5

// 5. Hàm Math.sqrt()
let d = 16;
console.log(Math.sqrt(d)); // 4

// 6. Hàm Math.pow()
let e = 2;
let f = 3;
console.log(Math.pow(e, f)); // 8