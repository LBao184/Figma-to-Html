// Hoisting in Function 
// 1. Hoisting:
// Function Declarations:
hoistedFunction();
function hoistedFunction() {
    console.log("Hello");
}
// Cách JS hiểu:
function hoistedFunction() {
    console.log("Hello");
}
hoistedFunction();

// Function Expressions:
let notHoistedFunction = function() {
    console.log("This will cause an error if called before declaration");
};
notHoistedFunction(); // Works fine when called after declaration

// Arrow Function:
let arrowFunction = () => {
    console.log("This will also cause an error if called before declaration");
};
arrowFunction(); // Works fine when called after declaration