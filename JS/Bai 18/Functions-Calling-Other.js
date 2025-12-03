/* 
Trong JavaScript, "Functions Calling Other Functions" (Hàm Gọi Các Hàm Khác) 
đề cập đến khả năng của một hàm để gọi hoặc thực thi một hàm khác bên trong thân của nó. 
Điều này cho phép tái sử dụng mã, tổ chức logic phức tạp hơn và tạo ra các hàm có chức năng đa dạng hơn.
*/

// Thực hiện phép cộng
function cong(a, b) {
    return a + b;
}

// Thực hiện phép nhân
function nhan(a, b) {
    return a * b;
}

function congNhan(num1 , num2 , num3) {
    // gọi hàm để tính tổng
    let sum = cong(num1, num2);
    // gọi hàm để tính tích
    let product = nhan(sum, num3);
    // Trả về kq:
    return product; 
}
// Sử dụng hàm congNhan
let result = congNhan(2, 3, 4); // (2 + 3) * 4 = 20
console.log("Kết quả của congNhan là: " + result); // 20