// Date - Time - TimeStamp

// 1. Tạo một đối tượng Date mới và in ra ngày hiện tại.
let currentDate = new Date();
console.log("Ngày hiện tại:", currentDate);

// 2. Lấy năm, tháng, ngày, giờ, phút và giây từ đối tượng Date.
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log("Năm:", year);
console.log("Tháng:", month);
console.log("Ngày:", day);
console.log("Giờ:", hours);
console.log("Phút:", minutes);
console.log("Giây:", seconds);

// 3. Lấy timestamp hiện tại (số mili giây kể từ ngày 1 tháng 1 năm 1970).
let currentTimeStamp = currentDate.getTime();
console.log("Timestamp hiện tại:", currentTimeStamp);