// Object in JS

// 1. Literal syntax:
// Sử dụng cặp đấu {} để định nghĩa 1 đối tượng mới
let student = {
// Thuộc tính (ta có thể nói student có 4 thuộc tính)
// key có quy tắc giống với quy tắc đặt tên biến
fullName: "Le Thien Bao",
birthYear: 2010, 
    address: {
        city: "Hanoi",
        country: "Vietnam",
        scores: [8, 9, 10],
},
// Phương thức
// VD1: Phương thức để lấy tuổi
getAge: function () {
    return 2024 - this.birthYear;
},
// VD2. Phương thức để tính điểm trung bình diemTrungBinh: 
// Tính tổng điểm
function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0); // Trả về điểm trung bình
        return sumScores / 3;
    },
};