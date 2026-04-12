// Bài tập 23 - Giải phương trình bậc 2
// Cách 1: Function Declaration
function ptb2_1(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    }
    else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("Phương trình có nghiệm kép x1 = x2 = " + x);
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có hai nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
    }
}
// Gọi hàm giải phương trình bậc 2
ptb2_1(1, 2, -3);
ptb2_1(1, 2, 1);
ptb2_1(1, 1, 1);
// _______________________________________________________________________________________________
// Cách 2: Function Expression
let ptb2_2 = function(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    }
    else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("Phương trình có nghiệm kép x1 = x2 = " + x);
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có hai nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
    }
};
// Gọi hàm giải phương trình bậc 2
ptb2_2(1, -3, 2);
ptb2_2(1, -2, 1);
ptb2_2(1, 0, 1);
// _______________________________________________________________________________________________
// Cách 3: Arrow Function
let ptb2_3 = (a, b, c) => {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    }
    else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("Phương trình có nghiệm kép x1 = x2 = " + x);
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có hai nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
    }
};
// Gọi hàm giải phương trình bậc 2
ptb2_3(1, -3, 2);
ptb2_3(1, -2, 1);
ptb2_3(1, 0, 1);