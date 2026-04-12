// String: là tập hợp các ký tự, ví dụ như chữ cái, số, dấu câu, khoảng trắng, v.v. Trong JavaScript, chuỗi được biểu diễn bằng kiểu dữ liệu "string" và có thể được tạo ra bằng cách sử dụng dấu nháy đơn (' '), dấu nháy kép (" ") hoặc dấu nháy ngược (` `).

// Cách tạo chuỗi:
console.log('Xin chào, abc, 123, !@#'); // Sử dụng dấu nháy đơn
console.log("Xin chào, abc, 123, !@#"); // Sử dụng dấu nháy kép
console.log(`Xin chào, abc, 123, !@#`); // Sử dụng dấu nháy ngược (template literals)

// 2. khởi tạo chuỗi
let str1 = 'Hello, World!';
let str2 = "JavaScript is awesome!";
let str3 = `Template literals are great!`;

// 3. index Chuỗi: bắt đầu từ 0, ví dụ: "Hello" có H ở vị trí 0, e ở vị trí 1, l ở vị trí 2, l ở vị trí 3, o ở vị trí 4
let ten = "Bao";
console.log(ten[0]); // B

// 4. Thuộc tính Length: kiểm tra chiều dài chuỗi
let s3 = "Hello, World!";
console.log(s3.length); // Kết quả: 13
console.log("Độ dài chuỗi s3: " + s3.length); // Kết quả: Độ dài chuỗi s3: 13
        // Vận dụng: nhập vào 1 tin nhắn, giới hạn ký tự nhập là 140, nếu vượt quá sẽ báo lỗi
        let message = prompt("Nhập tin nhắn (tối đa 140 ký tự):");
        if (message.length > 140) {
            console.log("Lỗi: Tin nhắn vượt quá 140 ký tự!");
        } else {
            console.log("Tin nhắn hợp lệ: " + message);
        }


// 5. Các phương thức chuỗi phổ biến
let str = "Hello, World!";

console.log(str.length); // Độ dài của chuỗi
console.log(str.toUpperCase()); // Chuyển chuỗi thành chữ hoa
console.log(str.toLowerCase()); // Chuyển chuỗi thành chữ thường
console.log(str.includes("World")); // Kiểm tra xem chuỗi có chứa một chuỗi con hay không
console.log(str.indexOf("o")); // Tìm vị trí của một chuỗi con
console.log(str.slice(0, 5)); // Cắt chuỗi từ vị trí 0 đến 5 (không bao gồm vị trí 5)
console.log(str.substring(0, 5)); // Cắt chuỗi từ vị trí 0 đến 5 (không bao gồm vị trí 5)
console.log(str.endsWith("!")); // Kiểm tra xem chuỗi có kết thúc bằng một chuỗi con hay không
console.log(str.replace("World", "JavaScript")); // Thay thế một chuỗi con bằng một chuỗi khác
console.log(str.split(", ")); // Tách chuỗi thành một mảng dựa trên dấu phân cách
console.log(str.trim()); // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
console.log(str.repeat(2)); // Lặp lại chuỗi một số lần
console.log(str.charAt(0)); // Lấy ký tự tại vị trí 0
console.log(str.startsWith("Hello")); // Kiểm tra xem chuỗi có bắt đầu bằng một chuỗi con hay không
console.log(str.toLowerCase().includes("hello")); // Kiểm tra xem chuỗi có chứa một chuỗi con không phân biệt chữ hoa thường
console.log(str.split("").reverse().join("")); // Đảo ngược chuỗi


// Bài tập vận dụng:
// Bài 1: Nhập vào 1 chuỗi từ bàn phím, kiểm tra xem chuỗi đó có bao nhiêu ký tự thường, in hoa, số, space
let inputString = prompt("Nhập vào một chuỗi:");
let lowercaseCount = 0;
let uppercaseCount = 0;
let digitCount = 0;
let spaceCount = 0;
for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (char >= 'a' && char <= 'z') {
        lowercaseCount++;
    } else if (char >= 'A' && char <= 'Z') {
        uppercaseCount++;
    } else if (char >= '0' && char <= '9') {
        digitCount++;
    } else if (char === ' ') {
        spaceCount++;
    }
}
console.log("Số ký tự thường: " + lowercaseCount);
console.log("Số ký tự in hoa: " + uppercaseCount);
console.log("Số ký tự số: " + digitCount);
console.log("Số ký tự khoảng trắng: " + spaceCount);

// Bài 2: Kiểm tra tính hợp lệ của mật khẩu: 
// - Mật khẩu phải có ít nhất 8 ký tự
// - Mật khẩu phải chứa ít nhất một chữ cái in hoa, một chữ cái thường, một số và một ký tự đặc biệt
let password = prompt("Nhập mật khẩu:");
let isValid = true;
if (password.length < 8) {
    isValid = false;
}
if (!/[A-Z]/.test(password)) {
    isValid = false;
}
if (!/[a-z]/.test(password)) {
    isValid = false;
}
if (!/[0-9]/.test(password)) {
    isValid = false;
}
if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    isValid = false;
}
if (isValid) {
    console.log("Mật khẩu hợp lệ.");
} else {
    console.log("Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 8 ký tự, chứa ít nhất một chữ cái in hoa, một chữ cái thường, một số và một ký tự đặc biệt.");
}
