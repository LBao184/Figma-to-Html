// 🔥 1. DOM (Document Object Model)

// 👉 DOM là mô hình của trang HTML

// Hiểu đơn giản:

// DOM = cách JavaScript truy cập và thay đổi nội dung trang web

// 🔹 Ví dụ HTML

<h1 id="title">Hello</h1>
// 🔹 Dùng JS thao tác DOM
let title = document.getElementById("title");
title.innerText = "Xin chào";

// 👉 Bạn vừa:
// Lấy phần tử HTML
// Thay đổi nội dung


// 🔹 DOM cho phép bạn:
// Sửa nội dung (innerText, innerHTML)
// Thay đổi CSS (style)
// Thêm / xóa phần tử
// Bắt sự kiện (click, input...)
// 💡 Hiểu nhanh:

// DOM = làm việc với “bên trong trang web”