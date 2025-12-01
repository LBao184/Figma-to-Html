// Vòng lặp While trong JS
// Cú pháp:
let i = 1;
while (i <= 5) {
    console.log(i);
    i++; // i++: i = i + 1
}

// Bài tập thực hành
let n = prompt("Nhập số bất kì từ 1-99: ")
console.log(n);

while (isNaN(n) || n < 1 || n > 99) {
    n = Number(prompt("Số bạn nhập không hợp lệ"))
}
alert("Số bạn nhập là: " + n)

// ____________________________________________________________________________
// Vòng lặp Do...While trong JS
// Cú pháp:
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// ____________________________________________________________________________
// Vòng lặp Vô Hạn While True trong JS
// Cú pháp:
let k = 0;
while (true) {
    // console.log(k);
    k++;
    alert(k)
    if (k > 10) {
        break; // Dừng vòng lặp khi k > 10
    }
}

// ____________________________________________________________________________
// Vòng Lặp For trong JS
// Cú pháp:
for (let m = 0; m < 5; m++) {
    console.log(m); // 0,1,2,3,4
}

// VD 1: in ra các số chẵn từ 0 đến 10
for (let p = 0; p <= 10; p += 2) {
    console.log(p); // 0,2,4,6,8,10
}

// VD 2: Tính tổng các số chẵn từ 1 đến 100
let sum = 0;
for (let q = 2; q <= 100; q += 2) {
    sum += q; // sum = sum + q
}
console.log("Tổng các số chẵn từ 1 đến 100 là: " + sum);

// ____________________________________________________________________________
// Continue, Break trong vòng lặp JS
for (let r = 1; r <= 10; r++) {
    if (r % 2 !== 0) {
        continue; // Bỏ qua các số lẻ
    }
    console.log(r); // In ra các số chẵn
}

let total = 0;
while (total < 100) {
   total++; // Tăng giá trị total lên 1
   if (total === 4) {
         break; // Dừng vòng lặp khi total = 4
   }
}
console.log("Giá trị cuối cùng của total là: " + total);
// Kết quả in ra sẽ là 4 vì vòng lặp dừng khi total đạt giá trị 4

// ____________________________________________________________________________