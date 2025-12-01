// Switch case statement example
// Ví dụ: 
let n = prompt("Nhập 1 số bất kì:");
let vl;
switch (n % 2) {
    case 1:
        console.log("Số lẻ");
        break;
    case 2:
        console.log("Số chẵn");
        break;
    default:
        console.log("Số không hợp lệ");
        break;
}
console.log("Kết quả của bạn là: " + vl);

// Lưu ý: có thể gom các case giống nhau lại
let month = parseInt(prompt("Nhập vào một tháng (1 - 12):"));
switch (month) {
    case 1: // Tháng 1
    case 3: // Tháng 3
    case 5: // Tháng 5
    case 7: // Tháng 7
    case 8: // Tháng 8
    case 10: // Tháng 10
    case 12: // Tháng 12
        console.log("Tháng có 31 ngày.");
        break;

    case 4: // Tháng 4
    case 6: // Tháng 6
    case 9: // Tháng 9
    case 11: // Tháng 11
        console.log("Tháng có 30 ngày.");
        break;

    case 2: // Tháng 2
        console.log("Tháng có 28 hoặc 29 ngày.");
        break;

    default:
        console.log("Tháng không hợp lệ.");
}

// Bài tập thực hành
let choise = Number(
    prompt(`
        Chọn cách tìm kiếm:
        1. Tìm theo tên
        2. Tìm theo tác giả
        3. Tìm theo năm xuất bản
        4. Thoát
    `)
);
switch (choise) {
    case 1:
        alert("Bạn đã chọn tìm kiếm theo tên.");
        break;
    case 2:
        alert("Bạn đã chọn tìm kiếm theo tác giả.");
        break;
    case 3:
        alert("Bạn đã chọn tìm kiếm theo năm xuất bản.");
        break;
    case 4:
        alert("Thoát chương trình.");
        break;
    default:
        alert("Lựa chọn không hợp lệ.");
        break;
}
