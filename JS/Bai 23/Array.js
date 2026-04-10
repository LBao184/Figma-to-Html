// Array: là một kiểu dữ liệu trong JavaScript dùng để lưu trữ nhiều giá trị trong một biến duy nhất. Mảng có thể chứa các loại dữ liệu khác nhau, bao gồm số, chuỗi, đối tượng, và thậm chí là các mảng khác (mảng lồng nhau).

// Khai báo mảng rỗng
let myArray = [];

// Khai báo mảng với giá trị ban đầu
let fruits = ["Táo", "Chuối", "Cam"];
console.log(fruits); // Output: ["Táo", "Chuối", "Cam"]

// Tác động vào mảng
fruits.push("Dứa"); // Thêm phần tử vào cuối mảng
console.log(fruits); // Output: ["Táo", "Chuối", "Cam", "Dứa"]

fruits.pop(); // Xóa phần tử cuối cùng của mảng
console.log(fruits); // Output: ["Táo", "Chuối"]

fruits.unshift("Xoài"); // Thêm phần tử vào đầu mảng
console.log(fruits); // Output: ["Xoài", "Táo", "Chuối", "Cam"]

fruits.shift(); // Xóa phần tử đầu tiên của mảng
console.log(fruits); // Output: ["Chuối", "Cam"]

fruits.concat(); // Nối hai hoặc nhiều mảng lại với nhau và trả về một mảng mới
console.log(fruits); // Output: ["Táo", "Chuối", "Cam"]
// Ví dụ:
let moreFruits = ["Dâu", "Kiwi"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Táo", "Chuối", "Cam", "Dâu", "Kiwi"]

fruits.slice(); // Trích xuất một phần của mảng và trả về một mảng mới
console.log(fruits); // Output: ["Táo", "Chuối", "Cam"]
// Ví dụ:
let slicedFruits = fruits.slice(1, 3); // Trích xuất phần tử từ index 1 đến index 2 (không bao gồm index 3)
console.log(slicedFruits); // Output: ["Chuối", "Cam"]

fruits.splice(); // Thay đổi nội dung của mảng bằng cách xóa, thay thế hoặc thêm phần tử
console.log(fruits); // Output: ["Táo", "Chuối", "Cam"]
// Ví dụ:
fruits.splice(1, 1, "Dâu"); // Xóa 1 phần tử tại index 1 và thêm "Dâu" vào vị trí đó
console.log(fruits); // Output: ["Táo", "Dâu", "Cam"]

fruits.sort(); // Sắp xếp các phần tử trong mảng theo thứ tự chữ cái hoặc số
console.log(fruits); // Output: ["Cam", "Dâu", "Táo"]

fruits.reverse(); // Đảo ngược thứ tự của các phần tử trong mảng
console.log(fruits); // Output: ["Táo", "Dâu", "Cam"]

fruits.includes(); // Kiểm tra xem một phần tử có tồn tại trong mảng hay không, trả về true hoặc false
console.log(fruits.includes("Dâu")); // Output: true
console.log(fruits.includes("Kiwi")); // Output: false




// Gán, Thay đổi giá trị trong mảng
fruits[1] = "Dâu"; // Thay đổi phần tử tại vị trí index 1
console.log(fruits); // Output: ["Táo", "Dâu", "Cam"]
//  *Lưu ý: thứ tự trong mảng bắt đầu từ 0, nghĩa là phần tử đầu tiên có index là 0, phần tử thứ hai có index là 1, và cứ tiếp tục như vậy.


// Truy xuất phần tử trong mảng
let arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // Output: 10 (phần tử đầu tiên)
console.log(arr[2]); // Output: 30 (phần tử thứ ba)

// Thuộc tính và phương thức của mảng
console.log(arr.length); // Output: 5 (số lượng phần tử trong mảng)
console.log(arr.indexOf(30)); // Output: 2 (vị trí của phần tử 30 trong mảng)
console.log(arr.includes(20)); // Output: true (kiểm tra xem phần tử 20 có tồn tại trong mảng hay không)
console.log(arr.join(", ")); // Output: "10, 20, 30, 40, 50" (nối các phần tử thành một chuỗi)

// Length là một thuộc tính của mảng, nó trả về số lượng phần tử hiện có trong mảng. Bạn có thể sử dụng length để kiểm tra kích thước của mảng hoặc để thêm phần tử mới vào cuối mảng bằng cách gán giá trị cho index bằng length của mảng.
let numbers = [1, 2, 3];
console.log(numbers.length); // Output: 3
numbers[numbers.length] = 4; // Thêm phần tử 4 vào cuối mảng
console.log(numbers); // Output: [1, 2, 3, 4]


// Duyệt Mảng
let number = [1, 2, 3, 4, 5];
console.log(number); // Output: [1, 2, 3, 4, 5]
// Cách 1: Sử dụng vòng lặp for
for (let i = 0; i < number.length; i++) {
    console.log(number[i]); // Output: 1, 2, 3, 4, 5 (mỗi số trên một dòng)
    number[i] = number[i] * 2; // Nhân mỗi phần tử với 2
}
console.log(number); // Output: [2, 4, 6, 8, 10]

// Cách 2: Sử dụng vòng lặp for...of
let count = 0;
let newArr = [1, 2, 3, 4, 5];
for (let element of newArr) {
    console.log(element); // Output: 1, 2, 3, 4, 5 (mỗi số trên một dòng)
    if (element % 2 === 0) {
        count++; // Đếm số phần tử chẵn trong mảng
    }
}
console.log(`Số phần tử chẵn trong mảng là: ${count}`); // Output: Số phần tử chẵn trong mảng là: 2