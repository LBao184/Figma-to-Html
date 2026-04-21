// textContent - innerText - innerHTML
let elm = document.getElementById("demo");

// TextContent: lấy / gán toàn bộ text, không quan tâm CSS (ẩn hay hiện vẫn lấy)
console.log("textContent: ");
console.log(elm.textContent);
// Tôi học 
//    JavaScript


// innerText: lấy text hiển thị thực tế trên màn hình
console.log("innerText: ");
console.log(elm.innerText);
// Tôi học JavaScript


// innerHTML: Lấy / gán cả HTML bên trong
console.log("innerHTML: ");
console.log(elm.innerHTML);
// <p> Tôi học
//      <b>JavaScript</b>
// </P>

let elm2 = document.getElementById("demo2");
elm2.innerHTML = <p><i>ShyredBuon</i></p>;
// ShyredBuon
elm2.textContent = <p><i>ShyredBuon</i></p>;
// <p><i>ShyredBuon</i></p>