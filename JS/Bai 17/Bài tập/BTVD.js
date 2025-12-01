// Bài 15: Sử dụng vòng lặp while để in ra số n
// Dùng vòng lặp For và While
// For Loop
let gt = 1
let n5 = Number(prompt("Nhập số n bất kì: "))
for (let i = 1; i <= n5; i++) {
    console.log(i);
    gt *= i; // gt = gt * i
}
console.log(n5 + "! = " + gt);

// While Loop
let gt2 = 1;
let j = 1;
while (j <= n5) {
    console.log(j);
    gt2 *= j; // gt2 = gt2 * j
    j++;
}
console.log(n5 + "! = " + gt2);


// Bài 16: Nhập số a, Nếu a chẵn thì in các số chẵn , còn lẻ thì không.
let a = Number(prompt("Nhập số a bất kì: "))
while (!Number.isInteger(a)) {
    a = Number(prompt("Số bạn nhập không hợp lệ, vui lòng nhập lại: "))
}
if (a % 2 === 0) {
    let sum = 0;
    for (let i = 0; i <= a; i += 2) {
        console.log(i);
        sum += i; // sum = sum + i
    }
        alert("Tổng các số chẵn từ 0 đến " + a + " là: " + sum);
} 
    else {
        alert("Số bạn nhập là số lẻ, không in ra dãy số.");
}


// Bài 17: Tính tổng số lẻ từ 1 đến n
let n = Number(prompt("Nhập số n bất kì: "))
while (!Number.isInteger(n)) {
    n = Number(prompt("Số bạn nhập không hợp lệ, vui lòng nhập lại: "))
}
let sum1 = 0;
for (let i = 1; i <= n; i += 2) {
    console.log(i);
    if (1 === 3) {
        break;
    }
    sum1 += i; // sum1 = sum1 + i
}
alert("Tổng các số lẻ từ 1 đến " + n + " là: " + sum1);


// Bài 18: Tính tổng số chia hết cho 3 từ 10 đế 50.
let count = Number(prompt("Nhập số count bất kì: "))
for (let i = 10; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
console.log("Kết quả tổng các số chia hết cho 3 từ 10 đến 50 là: " + count);


// Bài 19: Tính tổng S của các giai thừa từ 1! đến n!
let sum2 = 0;
for (let n = 1; n <= 10; n++) {
    let gt3 = 1;
    for (let i = 1; i <= n; i++) {
        gt3 *= i; // gt3 = gt3 * i
    }
    sum2 += gt3;
}
alert("Tổng S của các giai thừa từ 1! đến 10! là: " + sum2);


// bài 20: Số hoàn hảo trong khoảng 1-1000
for (let n = 1; n <= 1000; n++) {
    let sum3 = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum3 += i; // sum3 = sum3 + i
        }
    }
    if (sum3 === n) {
        console.log(n + " là số hoàn hảo.");
    }
}


// Bài 21: Kiểm tra số nguyên tố
let num = Number(prompt("Nhập số bất kì: "))
while (!Number.isInteger(num) || num <= 0) {
    num = Number(prompt("Số bạn nhập không hợp lệ, vui lòng nhập lại"))
}
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    alert(num + " là số nguyên tố.");
} else {
    alert(num + " không phải là số nguyên tố.");
}