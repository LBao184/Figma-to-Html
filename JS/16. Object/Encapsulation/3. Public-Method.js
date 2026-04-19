// 3. Private Fields: Trường riêng tư (Không thể truy cập từ bên ngoài)

class Wallet {
    #pin;
    #balance;
    #isPinEntered = false;
    constructor(bankName, pin) {
        this.bankName = bankName;
        this.#pin = pin;
        this.#balance = 0;
    }
    // Phương thức:
    deposit(value) {
        if(!this.#isPinEntered) {
            console.log("Kiểm tra lại mã PIN");
            return;
        }
        this.#balane += value;
    }


    // _____________________________________________________________
    // Private Method
    #validatePin(pin) {
        return this.#pin === pin;
    }

    // Public Method
    enterPin(pin) {
        if(this.#validatePin(pin) === true) {
            this.#isPinEntered = true;
        } else {
            console.log("Invalid Pin!");
        }
    };
    // _____________________________________________________________

    // Rút tiền:
    withdraw(value) {
        if(!this.#isPinEntered) {
            console.log("Kiểm tra lại mã pin!");
            return;
        } if(value > this.#balance) {
            console.log("Số tiền trong tài khoản không đủ");
        } else {
            this.#balance -= value;
            console.log("Rút tiền thành công!")
        }
    }

    // Getter:
    get balance() {
        if(!this.isPinEntered) {
            console.log("Kiểm tra lại mã pin!");
            return;
        }
        return this.#balance;
    };
};
// Đối tượng
const wallet = new Wallet("MB Bank", "18042010");
console.log(wallet.#balance);

// Nhập mã pin:
wallet.enterPin("18042010")     // Rút tiền thành công


// Gửi tiền:
wallet.deposit(1000)
// Rút tiền
wallet.withdraw(1200)   // Số tiền trong tài khoảng không đủ
wallet.withdraw(250)    // Rút tiền thành công
// Xem tài khoản
// console.log("Số tiền còn lại: ", wallet.#balance);    // Số tiền còn lại: 750
// console.log(wallet.#pin);


console.log(wallet.balance);    // 750
