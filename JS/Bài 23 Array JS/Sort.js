// SORT(): So sánh được sủ dụng để xác định thứ tự sắp xếp
/*
Cú pháp: array.sort([compareFunction])

array: Mảng cần được sắp xếp.
compareFunction (Tùy chọn): Hàm so sánh được sử dụng để xác định thứ tự sắp xếp. Nếu không được cung cấp,
sort() sẽ sắp xếp các phần tử dưới dạng chuỗi Unicode.
Hàm So sánh (Compare Function):

1. Nếu compareFunction          được cung cấp, nó sẽ nhận hai đối số, thường được gọi là a và b. 
2. Nếu compareFunction(a, b)    trả về một giá trị < 0, a sẽ được đặt trước b. 
3. Nếu compare Function(a, b)   trả về 0, thứ tự giữa a và b không thay đổi. 
4. Nếu compareFunction(a, b)    trả về một giá trị > 0, b sẽ được đặt trước a.

2. Khi không truyền compareFunction, sort() sẽ sắp xếp các phần tử dưới dạng chuỗi Unicode,
có nghĩa là nó sẽ so sánh các phần tử như chuỗi, ngay cả khi chúng là số.
Điều này có thể dẫn đến kết quả không mong muốn khi sắp xếp số.
*/

// Phương thức Sort:
let M1 = ["a", "b", "c"];
console.log ("b".charCodeAt()) ;
for (let element of M1) {
    console.log(`${element} có mã Unicode là: ${element.charCodeAt()}`);
}
let sortedM1 = M1.sort();
console.log(sortedM1); // Output: ["a", "b", "c"] (đã được sắp xếp theo thứ tự chữ cái)

// Trường hợp 2: phần tử có nhiều ký tự
let M2 = ["baa" , "b", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2); // Output: ["a", "baa", "c"] (đã được sắp xếp theo thứ tự chữ cái)

// Ví dụ:
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3); // Output: [1, 10000, 9] (sắp xếp theo thứ tự chuỗi Unicode, không phải theo giá trị số)

//
let M4 = [9, 3, 5, 4];
// Tăng 
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4); // Output: [3, 4, 5, 9] (đã được sắp xếp theo thứ tự số)
// Giảm dần
let sortedM5 = M4.sort((a, b) => b - a);
console.log(sortedM5); // Output: [9, 5, 4, 3] (đã được sắp xếp theo thứ tự số ngược lại)