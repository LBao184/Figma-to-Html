// ES6 - Classes
// Khai báo classes
// Cách 1: Class Expression (ít dùng)
const SinhVienEx = class{};

// Cách 2: Class Decoration (thường dùng vì nó ngắn gọn hơn)
class SinhVien {
    constructor(fullName, ID, BirthYear, homeTown) {
        this.fullName = fullName;
        this.ID = ID;
        this.BirthYear = BirthYear;
        this.homeTown = homeTown;
    };
        showInfo() {
            return `${this.fullName} ${this.ID} ${this.homeTown}` ;
    };
};
// Tạo đối tượng từ class
const student = new SinhVien("Le Bao", 18042010, 2010, "Ha Noi");
console.log(student);
console.log(student.showInfo());

// Kiểm tra nguyên mẫu của đối tượng student, chính là class SinhVien
console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student) === SinhVien.prototype);     // True

// 3. Thêm phương thức vào class SinhVien thủ công (sau khi đã có class)
SinhVien.prototype.calcAge = function(currentYear) {
    return currentYear - this.birthYear;
};
console.log(student.calcAge(2026));