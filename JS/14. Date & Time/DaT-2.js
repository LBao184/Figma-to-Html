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

// Thêm số 0 để xuất ngày tháng dưới dạng 01. 02. ...
let prefixDate = myDate4.getDate() < 10 ? "0" : "";
let prefixMonth = myDate4.getMonth() + 1 < 10 ? "0" : "";
console.log(
    `ngày ${prefixDate}${myDate4.getDate()}/Tháng ${prefixMonth}${myDate4.getMonth() + 1}/Năm ${myDate4.getFullYear()}`
)
// Kết quả: "ngày 18/Tháng 04/Năm 2026"


// setTimeout: thực thi một hàm sau một khoảng thời gian delay nhất định
setTimeout(() => {
    console.log("Đây là thông báo sau 3 giây");
}, 3000); // 3000 milliseconds = 3 giây

// setInterval: thực thi một hàm lặp đi lặp lại sau một khoảng thời gian delay nhất định
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Đây là thông báo lần thứ ${count}`);
    if (count >= 5) {
        clearInterval(intervalId); // Dừng setInterval sau 5 lần
    }
}, 2000); // 2000 milliseconds = 2 giây

// clearTimeout: dừng một timeout đã được thiết lập bằng setTimeout
let timeoutId = setTimeout(() => {
    console.log("Thông báo này sẽ không được hiển thị");
}, 5000);
clearTimeout(timeoutId); // Dừng timeout trước khi nó thực thi

// intervalID là một giá trị trả về từ setInterval, dùng để dừng interval bằng clearInterval
let intervalId2 = setInterval(() => {
    console.log("Thông báo này sẽ được hiển thị mỗi 2 giây");
}, 2000);

// 3 Cách khai báo hàm
let helloArrow = () => {
    console.log("Hello Arrow Function");
}
setTimeout(helloArrow, 3000);

function helloFunction() {
    console.log("Hello Function Declaration");
}
setTimeout(helloFunction, 3000);