// CÁC TOÁN TỬ SO SÁNH TRONG JS
/*
    != : khác nhau
    !== : so sánh về cả giá trị và kiểu dữ liệu
    == : bằng nhau
    === : bằng nhau về giá trị và kiểu dữ liệu
    >  : lớn hơn
    <  : nhỏ hơn
    >= : lớn hơn hoặc bằng
    <= : nhỏ hơn hoặc bằng
*/

let A = 1;
let B = 3;
let C  = "3";
console.log(typeof B); // number
console.log(typeof C); // string

// ___________________________________________________________________
// So sánh
console.log(A > B);  // false
console.log(A < B);  // true
console.log(A >= B); // false
console.log(A <= B); // true
console.log(A != B); // true
console.log(A == B); // false

// So sánh == (không quan tâm về kiểu dữ liệu)
console.log (A == B); // false
console.log (B == C); // true

// So sánh === (so sánh về giá trị và kiểu dữ liệu)
console.log (A === B); // false
console.log (B === C); // false