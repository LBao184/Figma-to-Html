// Filter(): Trích lọc các phần tử thỏa mãn điều kiện của hàm
// Cú pháp: array.filter(function)
/* 
function(currentValue, [currentIndex], [array])

Hàm được gọi với những đối số sau:
1. currentValue:    Giá trị hiện tại đang xử lý trong mảng.
2. currentIndex:    (Tùy chọn) Chỉ số của phần tử đang xử lý.
3. array:           (Tùy chọn) Mảng đang được filter.
*/

// Ví dụ: Lọc ra các số chẵn từ một mảng
let M1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = M1.filter((currentValue) => currentValue % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]