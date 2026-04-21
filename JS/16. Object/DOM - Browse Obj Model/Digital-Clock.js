// Digital Clock: Hiển thị thời gian thực với DOM.
// 1. tạo đối tượng DATE: sử dụn new date()
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hours}: ${minutes}: ${seconds}`;
    document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);