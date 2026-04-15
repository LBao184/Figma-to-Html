// Function-Constructor: Sử dụng để tạo khuôn mẫu

// Cách 1: Function Expression (Ít dùng)
const SinhVien = function(fullName, ID, birthYear, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
    // Phương thức
    this.showInfo = function() {
        return `${fullName} ${ID} ${homeTown}` ;
    };
};
console.log(typeof SinhVien);



// Cách 2: Function Declaration (Thường dùng hơn)
function Student(fullName, ID, birthYear, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
    // Phương thức:
    this.showInfo = function() {
        return `${fullName} ${ID} ${homeTown}` ;
    };
};
// Function Constructor: Hàm tạo
// Tạo cá đối tượng cụ thể (instance: 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Nguyễn Văn A", "2024001", 2005, "Nam Định");
const sv2 = new Student("Nguyễn Văn B", "2024002", 2004, "Hà Nội");

// Truy cập các thuộc tính và phương thức của đối tượng:
console.log(sv1.fullName);      // Nguyễn Văn A (Dot Notation)
console.log(sv1["fullName"]);   // Nguyễn Văn B (Bracket Notation)
console.log(sv2.fullName);      // Nguyễn Văn B
console.log(sv2.showInfo());    // Nguyễn Văn B 2024002 2004 Hà Nội

// Sv1 và Sv2 có thể gọi là các đối tượng cụ thể, hoặc gọi là các instance (thể hiện):
console.log("Check instance: ");
let abc = 1;
console.log(sv1 instanceof Student);    // True
console.log(abc instanceof Student);    // False

// Thêm, sửa, xóa thuộc tính
sv2.email = "nguyenvanA2005.com";
sv2.fullName = "Nguyễn văn C";
delete sv2.homeTown;
console.log(sv2);