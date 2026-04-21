// 1. QuerySelector: dùng dể lấy phân tử đầu tiên khớp với CSS Selector
// 2. QuerySelectorAll: Dùng để lấy tất cả phần tử.

// 1. QuerySelector:
// VD:
<p class="text">A</p> ,
<p class="text">B</p>

let el = document.querySelector(".text");
console.log(el.innerText); // "A"
// 👉 Chỉ lấy phần tử đầu tiên, dù có nhiều cái

// 2. QuerySelectorAll:
let list = document.querySelectorAll(".text");
list.forEach(el => {
    console.log(el.innerText);
});
// 👉 Lấy cả "A" và "B"



// 💡 Điểm quan trọng (hay thi / hay lỗi)
// 1. QuerySelectorAll trả về NodeList
let list = document.querySelectorAll(".text");
console.log(list[0]); // vẫn truy cập được
// Nhưng:
list.style.color = "red"; // ❌ lỗi
// Phải dùng loop:
list.forEach(el => {
    el.style.color = "red";
});

// 2. Dùng Selector giống CSS:
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("div p");

// VÍ DỤ THỰC TẾ:
// HTML
<button id="btn">Click</button> ,
<p class="text">1</p> ,
<p class="text">2</p> 

// JS
let btn = document.querySelector("#btn");
let list = document.querySelectorAll(".text");

btn.addEventListener("click", () => {
    list.forEach(el => {
        el.innerText = "Đã đổi!";
    });
});