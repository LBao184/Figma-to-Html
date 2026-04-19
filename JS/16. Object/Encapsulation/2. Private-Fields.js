// Thêm dấu _ (Private Fields): trường riêng tư theo quy ước
// Có thể truy cập từ bên ngoài.

class Wallet {
    constructor(bankName, pin) {
        this.bankName = bankName;
        this._pin = _pin;
        this._balance = 0;
    }
    deposit(value) {
        this.balane += value;
    }
    withdraw(value) {
        if(value > this._balance) {
            console.log("Số tiền trong tài khoảng không đủ");
        } else {
            this._balance -= value;
            console.log("Rút tiền thành công");
        }
    };
};
const wallet = new Wallet("MB Bank", "18042010");
console.log(wallet._balance);

// Gửi tiền:
wallet.deposit(1000)
// Rút tiền
wallet.withdraw(1200)   // Số tiền trong tài khoảng không đủ
wallet.withdraw(250)    // Rút tiền thành công
// Xem tài khoản
console.log("Số tiền còn lại: ", wallet._balance);    // Số tiền còn lại: 750
console.log(wallet._pin);


