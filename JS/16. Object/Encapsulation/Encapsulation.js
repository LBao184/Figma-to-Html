// Encapsulation(tính đóng gói): cho phép che dấu thông tin và hành vi của 1 đối tượng và chỉ tiết lệ các phần cần cung cấp cho người dùng thông qua giao diện công khai

// 1. Public Fields: Trường công khai, trường công cộng.
// 2. Private Fields: Trường riêng tư.
// 3. Public Method: Phương thức công khai.
// 4. Private Method: Phương thức riêng tư.


// 1. Public Fields:
class Wallet {
    constructor(bankName, pin) {
        this.bankName = bankName;
        this.pin = pin;
        this.balance = 0;
    }

    // Phương thức gửi tiền vào tài khoản
    deposit(value) {
        this.balane += value;
    }

    // Rút tiền
    withdraw(value) {
        if(value > this.balance) {
            console.log("Số tiền trong tài khoảng không đủ");
        } else {
            this.balance -= value;
            console.log("Rút tiền thành công");
        }
    };
};

// Tạo đối tượng
const wallet = new Wallet("MB Bank", "18042010");
console.log(wallet.balance);

// Gửi tiền:
wallet.deposit(1000)
// Rút tiền
wallet.withdraw(1200)   // Số tiền trong tài khoảng không đủ
wallet.withdraw(250)    // Rút tiền thành công
// Xem tài khoản
console.log("Số tiền còn lại: ", wallet.balance);    // Số tiền còn lại: 750
console.log(wallet.pin);
// ___________________________________________________________________________________________________________________________________________
