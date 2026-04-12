// indexOf - lastIndexOf - join(separator) - reverse

// IndexOF: Trả về vị trí đầu tiên của phần tử được chỉ định trong mảng, hoặc -1 nếu không tìm thấy
let fruits = ["Táo", "Chuối", "Cam"];
console.log(fruits.indexOf("Chuối")); // Output: 1
console.log(fruits.indexOf("Dứa")); // Output: -1

// lastIndexOf: Trả về vị trí cuối cùng của phần tử được chỉ định trong mảng, hoặc -1 nếu không tìm thấy
console.log(fruits.lastIndexOf("Chuối")); // Output: 1
console.log(fruits.lastIndexOf("Dứa")); // Output: -1 (Nếu không tìm thấy phần tử, nó sẽ trả về -1)

// join(separator): Nối tất cả các phần tử của mảng thành một chuỗi, với separator là ký tự ngăn cách
console.log(fruits.join(", ")); // Output: Táo, Chuối, Cam

// reverse: Đảo ngược thứ tự của các phần tử trong mảng
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // Output: [5, 4, 3, 2, 1]
let arr2 = ["A", "B", "C"];
console.log(arr2.reverse()); // Output: ["C", "B", "A"]