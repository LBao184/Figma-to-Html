// Điều kiện if else trong JS
let dtb = parseFloat(prompt("Nhập điểm trung bình của bạn: "));
// Kiểm tra điều kiện
if (dtb >= 5.0) {
    console.log("Bạn đã đậu môn học!");
} else {
    console.log("Bạn đã rớt môn học!");
}

// ELSE IF
let age = parseInt(prompt("Nhập tuổi của bạn: "));
if (age < 13) {
    console.log("Bạn là trẻ em.");
} else if (age >= 15 && age < 20) {
    console.log("Bạn là thanh thiếu niên.");
} else if (age >= 20 && age < 60) {
    console.log("Bạn là người trưởng thành.");
} else {
    console.log("Bạn là người cao tuổi.");
}