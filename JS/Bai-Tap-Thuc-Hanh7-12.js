// Bài tập 2: BMI
let cn = parseFloat(prompt("Nhập cân nặng của bạn (kg): "));

if (cn < 15) {
    console.log("Bạn quá nhẹ");
}
else if ( cn >= 15 && cn < 16) {
    console.log("Bạn nhẹ cân");
}
else if ( cn >= 16 && cn < 18.5) {
    console.log("Bạn hơi nhẹ cân");
}
else if ( cn >= 18.5 && cn < 25) {
    console.log("Bạn có cân nặng bình thường");
}
else if ( cn >= 25 && cn < 30) {
    console.log("Bạn hơi thừa cân");
}
else if ( cn >= 30 && cn < 35) {
    console.log("Bạn béo phì");
}
else {
    console.log("Bạn quá béo");
}