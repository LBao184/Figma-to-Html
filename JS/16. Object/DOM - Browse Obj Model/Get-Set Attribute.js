// 1. Get-Attribute: Lấy dữ liệu từ HTML
// 2. Set-Atttibute: Sửa/Thêm dữ liệu vào HTML

// 1. Get Attribute:
// HTML
<img id="img" src="a.jpg" alt="ảnh"></img>

// JS
let img = document.getElementById("img");
console.log(img.getAttribute("src")); // "a.jpg"
console.log(img.getAttribute("alt")); // "ảnh"

// 👉 Cú pháp:
element.getAttribute("tên_thuộc_tính")

// 2. Set Attribute:
// HTML
img.setAttribute("src", "b.jpg");
img.setAttribute("alt", "ảnh mới");

// 👉 Sau khi chạy:
<img src="b.jpg" alt="ảnh mới"></img>

// 👉 Cú pháp:
element.setAttribute("tên", "giá_trị")


// 3. XÓA Attribute:
img.removeAttribute("alt");

// 4. Kiểm tra có attribute không
img.hasAttribute("src");    // true


// 🔥 Ví dụ thực tế (hay gặp):
// HTML
<a id="link" href="https://google.com">Google</a>,
<button id="btn">Đổi link</button>

// JS
let link = document.getElementById("link");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    link.setAttribute("href", "https://youtube.com");
});
