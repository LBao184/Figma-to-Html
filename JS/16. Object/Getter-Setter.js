// getter: là 1 phương thức được sử dụng để lấy ra giá trị của 1 thuộc tính
// setter:                                  thiết lập giá trị cho 1 thuộc tính

// Ví dụ:
class School {
    constructor(id, name, birthYear, score) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this._score = score;
        // Thêm dáu _ vào để thể hiện nó ở trạng thái protected
        // Không nên truy cập, sửa đổi trực tiếp từ bên ngoài
    };
        // Phương thức:
        calcAge(currentYear) {
            return currentYear - this.birthYear;
        };

    // Getter cho thuộc tính score
    get score() {
        return this._score;
    }

    // Setter cho thuộc tính score
    set score(value) {
        // Thêm các biểu thức Logic để kiểm tra giá trị
        if (value >= 0 && value <= 100) {
            this._score = value
        }
        else {
            console.log("Điểm số không hợp lệ")
        }
    };
};

// Tạo đối tượng
const bao = new School("LB18042010", "Bao", 2010, 184);
console.log(bao.id);
console.log(bao.name);
console.log(bao.birthYear);
console.log(bao._score);
console.log(bao.calcAge(2026));

// Sử dụng Getter
console.log(bao.score);

// Sử dụng Setter
bao.score = 250;
console.log(bao.score)      // Điểm số không hợp lệ