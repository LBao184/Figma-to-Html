// Reduce(): dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất từ một mảng. Hàm này được gọi cho mỗi phần tử của mảng, và kết quả của hàm sẽ được sử dụng làm đối số cho lần gọi tiếp theo của hàm.
// Cú pháp: array.reduce(function, [initialValue])

// function: một hàm thực thi cho từng phần tử trong mảng
// initialValue (Tùy chọn): một giá trị ban đầu được sử dụng làm đối số đầu tiên cho lần gọi đầu tiên của hàm. Nếu không được cung cấp, phần tử đầu tiên của mảng sẽ được sử dụng làm giá trị ban đầu, và vòng lặp sẽ bắt đầu từ phần tử thứ hai.

/*
function(accumulator, currentValue, [currentIndex], [array])
Hàm được gọi với những đối số sau:
1. accumulator:     Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm.
2. currentValue:    Giá trị hiện tại đang xử lý trong mảng.
3. currentIndex:    (Tùy chọn) Chỉ số của phần tử đang xử lý.
4. array:           (Tùy chọn) Mảng đang được reduce.
*/

// Bài toán tính tổng các phần tử trong mảng
let numbers = [1, 2, 3, 4, 5];

// 1. Không dùng reduce
let sum = 0;
for(let element of numbers) {
    sum += element; // sum = sum + element
}
console.log(sum); // Output: 15

// 2. Dùng reduce
let sum2 = M1.reduce ((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}, 0); // initialValue là 0
console.log(sum2); // Output: 15

// Rút gọn lại
let sum3 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum3); // Output: 15