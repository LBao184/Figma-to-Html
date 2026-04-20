// BOM (Browser Object Model): mô hình đối tượng trình duyệt, cung cấp 1 giao diện lập trình để tươn tác với các thành phần của trình duyệt.

// 🔹 BOM trong JavaScript là gì?
// 👉 BOM (Browser Object Model) là tập hợp các object giúp JavaScript tương tác với trình duyệt (browser).

// Hiểu đơn giản:
// BOM = cách JS “điều khiển” trình duyệt

// 🔥 Ví dụ dễ hiểu
alert("Hello"); 

// 👉 Đây là BOM (hiển thị popup của trình duyệt)


// 🔹 Các thành phần chính của BOM
// 1. window (quan trọng nhất);
// 👉 Là object gốc của BOM
console.log(window);
// Tất cả đều nằm trong window
// Bạn có thể viết:
window.alert("Hi");
// hoặc
alert("Hi"); // giống nhau


// 2. location (URL)
// 👉 Dùng để lấy hoặc thay đổi URL
console.log(location.href); // xem URL
location.href = "https://google.com"; // chuyển trang


// 3. history
// 👉 Điều hướng lịch sử trình duyệt
history.back();  // quay lại
history.forward(); // tiến tới


// 4. navigator
// 👉 Thông tin về trình duyệt
console.log(navigator.userAgent);


// 5. screen
// 👉 Thông tin màn hình
console.log(screen.width);


// 🔥 BOM vs DOM (rất hay nhầm)
// BOM	                                    DOM
// Làm việc với trình duyệt	            Làm việc với HTML
// Ví dụ: URL, history	                Ví dụ: document.getElementById()
// Không có chuẩn chính thức	        Có chuẩn rõ ràng

// 🔹 Ví dụ kết hợp BOM
if (confirm("Bạn có muốn rời trang không?")) {
    location.href = "https://google.com";
}

// 👉 Hỏi người dùng → nếu OK → chuyển trang

// 💡 Hiểu nhanh 1 câu
// BOM = điều khiển trình duyệt
// DOM = điều khiển nội dung trang web


// 🎯 Khi nào bạn dùng BOM?
// Chuyển trang
// Hiển thị alert / confirm
// Kiểm tra trình duyệt
// Xử lý nút back/forward