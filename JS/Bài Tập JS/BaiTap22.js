// Giải bài tập 22 - Tính n giai thừa - Function
// Sử dụng Hàm Function, For, While

let n = Number(prompt("Nhập số n để tính n giai thừa: "));
while (!Number.isInteger(n) || n < 0) {
    n = Number(prompt("Vui lòng nhập lại số nguyên không âm n: "));
}
function tinhGiaiThua(n) {
    let giaithua = 1;
    for (let i = 1; i <= n; i++) {
        giaithua *= i;
    }
    return giaithua;
}
console.log("Giai thừa của " + n + " là: " + tinhGiaiThua(n));



//25.5 Giải bài tập - đên 25.6 :

//Tính giai thừa
let GT = (n) => {
  let giaithua = 1;
  for (let i = 1; i <= n; i++) {
    giaithua *= i;
  }
  return giaithua;
};
// Bước nhập liệu :
let m = +prompt(`Nhập số nguyên n: `);
while (isNaN(m) || !Number.isInteger(m) || m <= 0) {
  m = +prompt(`Nhập sai, hãy nhập lại: `);
}
console.log(`Số nguyên ${m} hợp lệ`);

//Xuất kết quả :
let result = GT(m);
console.log(`Kết quả ${m}! là ${result}`);
