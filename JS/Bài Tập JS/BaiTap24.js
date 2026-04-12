// Bài tập số 24: Nhập vào 1 chuỗi, đếm xem có bao nhiêu kí tự thường, hoa, số, space
let str = prompt("Nhập vào một chuỗi:");
let lowerCaseCount = 0;
let upperCaseCount = 0;
let digitCount = 0;
let spaceCount = 0;
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char >= 'a' && char <= 'z') {
        lowerCaseCount++;
    } else if (char >= 'A' && char <= 'Z') {
        upperCaseCount++;
    } else if (char >= '0' && char <= '9') {
        digitCount++;
    } else if (char === ' ') {
        spaceCount++;
    }
}
console.log("Số ký tự thường:", lowerCaseCount);
console.log("Số ký tự hoa:", upperCaseCount);
console.log("Số ký tự số:", digitCount);
console.log("Số ký tự khoảng trắng:", spaceCount);