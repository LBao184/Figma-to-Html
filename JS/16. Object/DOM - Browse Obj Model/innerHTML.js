// innerHTML

// 1. get ElementById(): cơ bản nhất, lấy phần tử theo ID
// 2. get ElementByClassName(): lấy nhiều phần tử theo class
// 3. getElementsByTagName(): Lấy theo tên thẻ.


// 1. get ElementById():
// Ví dụ:
<h1 id="Title">Hello!</h1>

let el = document.getElementById("Title");
console.log(el);     // <h1 id="Title">Hello!</h1>
// sau đó, có thế:
el.innetText = "Xin Chào!";

// 2. get ElementByClassName():
// Ví dụ:
<p class="text">A</p> ,
<p class="text">B</p>

let list = document.getElementsByClassName("text");
console.log(list[0]); // phần tử đầu tiên

// 3. getElementsByTagName():
let allP = document.getElementsByTagName("p");

