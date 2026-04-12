// Bài tập JS 30: Viết chương trình đếm ngược thời gian theo từng giây. Ví dụ nhập vào 10 phút thì sẽ đếm ngược từ 10 phút, 9 phút 59 giây, 9 phút 58 giây,... đến khi hết thời gian sẽ hiển thị thông báo "Hết giờ!"
function startCountdown(minutes) {
    let totalSeconds = minutes * 60;
    let countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            console.log("Hết giờ!");
            return;
        }
        totalSeconds--;
        let displayMinutes = Math.floor(totalSeconds / 60);
        let displaySeconds = totalSeconds % 60;
        console.log(`${displayMinutes} phút ${displaySeconds} giây`);
    }, 1000);
}

// Cách 2:
function Countdown(minutes) {
    alert("Bắt đầu đếm ngược với " + minutes + " phút");
    let seconds = minutes * 60;
    let countdownInterval = setInterval(function () {
        let minutesLeft = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;
        let prefixSecondFormat = secondsLeft < 10 ? "0" : "";
        console.log(`${minutesLeft} phút ${prefixSecondFormat}${secondsLeft} giây`);

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            alert("Hết giờ!");
        }
        else {
            seconds--;
        }
    }, 1000);
}

let timeInput = Number(prompt("Nhập vào số phút để đếm ngược:"));
Countdown(timeInput);
