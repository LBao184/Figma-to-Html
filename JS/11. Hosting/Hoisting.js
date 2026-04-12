// Hoisting in JavaScript
// VAR: Variable declarations
console.log("Giá trị của biến:" + myVar); // undefined due to hoisting
var myVar = 10;
console.log("Giá trị của biến sau khi gán:" + myVar); // 10

// Cách JS hiểu:
var myVar;
console.log("Giá trị của biến:" + myVar); // undefined
myVar = 10;
console.log("Giá trị của biến sau khi gán:" + myVar); // 10

// 2. Phạm vi sử dụng (Scope):
// 1. var: có phạm vi là function-scoped
// 2. let và const: có phạm vi là block-scoped
function exampleVar() {
    if (true) {
        var y = 20;
        console.log(y + " Trong block scope");
    }
    console.log(y + " Ngoài block scope"); // 20
}
exampleVar();

// Cách JS hiểu:
function exampleVar() {
    var y;
    if (true) {
        y = 20;
        console.log(y + " Trong block scope");
    }
    console.log(y + " Ngoài block scope"); // 20
}

// 3. Re-declaration:
var a = 5;
var a = 10; // Không lỗi
console.log("Giá trị của a sau khi re-declaration với var: " + a); // 10
// LET và CONST: Variable declarations
