// Đệ quy trong JS
// Đệ quy là một kỹ thuật trong lập trình nơi một hàm gọi chính nó để giải quyết một vấn đề bằng cách chia nhỏ nó thành các phần nhỏ hơn và dễ quản lý hơn.
// Ví dụ 1: Tính giai thừa của một số sử dụng đệ quy
function giaiThua(n) {
    // Trường hợp cơ sở: giai thừa của 0 hoặc 1 là 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Gọi đệ quy: n! = n * (n-1)!
        return n * giaiThua(n - 1);
    }
}

// Gọi hàm giaiThua
let Kq = giaiThua(5); // 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log("Giai thừa của 5 là: " + Kq); // 120


// Ví dụ 2: Dãy Fibonacci sử dụng đệ quy
function fibonacci(n) {
    // Trường hợp cơ sở: F(0) = 0, F(1) = 1
    if (n <= 2) {
        return 1;
    } else {
        // Gọi đệ quy: F(n) = F(n-1) + F(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Gọi hàm fibonacci
let fibKq = fibonacci(6); // F(6) = 8
console.log("Số Fibonacci thứ 6 là: " + fibKq); // 8