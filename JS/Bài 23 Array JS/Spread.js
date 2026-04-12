// SPREAD
// spread (): là toán tử được sử dụng để mở rộng một iterable (như mảng hoặc chuỗi) thành các phần tử riêng lẻ. Nó thường được sử dụng để sao chép mảng, kết hợp mảng, hoặc truyền các phần tử của một mảng như đối số cho một hàm.
// a, Tạo bản sao (Clone) của mảng
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2); // Output: [1, 2, 3]

// b, Kết hợp mảng
let arr3 = [4, 5, 6];
let combinedArr = [...arr1, ...arr3];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// c, Truyền phần tử của mảng như đối số cho hàm
function sum(a, b, c) {
    return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// d, Sao chép mảng và thêm phần tử mới
let arr4 = [...arr1, 4];
console.log(arr4); // Output: [1, 2, 3, 4]

// e, Sao chép mảng và thay đổi phần tử
let arr5 = [...arr1];
arr5[0] = 10;
console.log(arr5); // Output: [10, 2, 3]
console.log(arr1); // Output: [1, 2, 3] (arr1 không bị ảnh hưởng bởi sự thay đổi trong arr5)

// f, Chuyển đổi iterable thành mảng
let str = "Hello";
let charArray = [...str];
console.log(charArray); // Output: ["H", "e", "l", "l", "o"]