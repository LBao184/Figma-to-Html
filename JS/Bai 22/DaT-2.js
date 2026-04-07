// Set thời gian theo ý muốn
// Cách 1: New Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
let myDate1 = new Date(2026, 3, 18);
console.log(myDate1.toLocaleDateString()); // Kết quả: "18/4/2026" (tháng bắt đầu từ 0)

// Cách 2: New Date(dateString)
let myDate2 = new Date("2026-04-18");
console.log(myDate2.toLocaleDateString()); // Kết quả: "18/4/2026"

// Cách 3: Sử dụng setFullYear, setMonth, setDate
let myDate3 = new Date();
myDate3.setFullYear(2026);
myDate3.setMonth(3); // Tháng bắt đầu từ 0, nên tháng 4 là 3
myDate3.setDate(18);
console.log(myDate3.toLocaleDateString()); // Kết quả: "18/4/2026"

// Cách 4: Xuất ngày tháng năm theo định dạng tùy chỉnh
console.log(
    `ngày ${myDate4.getDate()}/Tháng ${myDate4.getMonth() + 1}/Năm ${myDate4.getFullYear()}`
)

let prefixDate = myDate4.getDate() < 10 ? "0" : "";
let prefixMonth = myDate4.getMonth() + 1 < 10 ? "0" : "";
console.log(
    `ngày ${prefixDate}${myDate4.getDate()}/Tháng ${prefixMonth}${myDate4.getMonth() + 1}/Năm ${myDate4.getFullYear()}`
)
// Kết quả: "ngày 18/Tháng 4/Năm 2026"