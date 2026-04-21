// DOM Styles: chỉnh / thêm CSS trong JS
// 🔥 1. Cú pháp chung
element.style.tenThuocTinh = "giá trị";

// Ví dụ:
let el = document.getElementById("box");

el.style.color = "red";
el.style.backgroundColor = "yellow";
el.style.fontSize = "20px";

// QUY TẮC TÊN PHẦN TỬ TRONG JS (camelCase):
// CSS:
background-color,
font-size

// JS:
backgroundColor,
fontSize

// 2. Lấy giá trị Styles
console.log(box.style.color);   // ⚠️ Chỉ lấy được style viết inline bằng JS hoặc HTML

// 👉 Nếu muốn lấy CSS thật:
getComputedStyle(box).color;

// 3. Ví dụ thực tế:
<button id="btn">Click</button> ,
<div id="box">Hello</div>

let btn = document.getElementById("btn");
let box = document.getElementById("box");
btn.addEventListener("click", () => {
    box.style.backgroundColor = "black";
    box.style.color = "white";
});

// Trường hợp chỉnh sửa ví dụ màu của 1 phần tử trong cả 3 file html, css, js
// ĐỘ ƯU TIÊN NHƯ SAU:
// CSS < HTML < JS

// 🧠 GIẢI THÍCH 
// 1. CSS (THẤP NHẤT):
#box ;{
  color: red
}
// Css bị override dễ dàng

// 2. HTML (inline style)
<div id="box" style="color: blue;">Hello</div>
// 👉 Inline style sẽ đè CSS file

// 3. JavaScript (CAO NHẤT!)
document.getElementById("box").style.color = "green";
// JS đang ghi trực tiếp vào style trong html
// ___________________________________________________________________________________________________
