// Bài 26: Viết chương trình chuyển tin nhắn sang mật mã theo bảng
// const a = "abcdefghijklmnopqrstuvwxyz"
// const b = "zxcbnmasdfghjklqwertyuiop"

function chuyenTinNhan(tinNhan) {
    const a = "abcdefghijklmnopqrstuvwxyz";
    const b = "zxcbnmasdfghjklqwertyuiop";
    let ketQua = "";
    for (let i = 0; i < tinNhan.length; i++) {
        let char = tinNhan.charAt(i);
        let index = a.indexOf(char);
        if (index !== -1) {
            ketQua += b.charAt(index);
        } else {
            ketQua += char; // Nếu ký tự không phải là chữ cái, giữ nguyên
        }
    }
    return ketQua;
}

// Bài 27: const c = "Tôi chăm học tôi chịu khó tôi đẹp trai"
// đếm số từ "tôi" xuất hiện trong chuỗi trên
let c = "Tôi chăm học tôi chịu khó tôi đẹp trai";
let countToi = 0;
let words = c.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "tôi") {
        countToi++;
    }
}
console.log("Số từ 'tôi' xuất hiện trong chuỗi:", countToi);

// Bài 28: Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi
let input = prompt("Nhập vào một chuỗi:");
let chuoiSo = "";
let chuoiChu = "";
for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);
    if (char >= '0' && char <= '9') {
        chuoiSo += char;
    } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        chuoiChu += char;
    }
}
console.log("Chuỗi số:", chuoiSo);
console.log("Chuỗi chữ:", chuoiChu);