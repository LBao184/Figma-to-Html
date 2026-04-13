/*
1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím
2. Xuất các giá trị trong mảng
3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
4. Sắp xếp mảng tăng dần
5. Tính tổng các phần tử trong mảng
6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không, nếu có xuất ra vị trí index của số đó trong mảng
*/

// 1. Nhập số phần tử n
let n = parseInt(prompt("Nhập số phần tử của mảng:"));

// Khởi tạo mảng
let arr = [];

// Tạo mảng với n số nguyên ngẫu nhiên (0 → 99)
for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    arr.push(randomNumber);
}

// 2. Xuất mảng ban đầu
console.log("Mảng ban đầu:", arr);

// 3. Đảo ngược mảng
let reversedArr = [...arr].reverse();
console.log("Mảng sau khi đảo ngược:", reversedArr);

// 4. Sắp xếp mảng tăng dần
let sortedArr = [...arr].sort((a, b) => a - b);
console.log("Mảng sau khi sắp xếp tăng dần:", sortedArr);

// 5. Tính tổng các phần tử
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Tổng các phần tử trong mảng:", sum);

// 6. Kiểm tra số người dùng nhập
let x = parseInt(prompt("Nhập số cần tìm:"));
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
        console.log("Số", x, "tồn tại tại vị trí index:", i);
        found = true;
    }
}

if (!found) {
    console.log("Số", x, "không tồn tại trong mảng");
}