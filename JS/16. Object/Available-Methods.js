// Các phương thức có sẵn trong JS
// 1. Object.keys(obj):                 Trả về 1 mảng chứa tất cả các ký tự keys(tên thuộc tính) của đối tượng.
// 2. Object.values(obj):               Trả về 1 mảng chứa tất cả các giá trị của đối tượng.
// 3. Object.entries(obj):              Trả về 1 mảng chứa các cặp [Khóa, giá trị] của đối tượng dưới dạng mảng con.
// 4. Object.assign(target, source):    Sao chép các thuộc tính từ 1 hoặc nhiều đối tượng nguồn(Source) vào 1 đối tượng đích(target).
// 5. object.hasOwnProperty(prop):      Kiểm tra xem đối tượng có thuộc tính nào đó hay không và trả về true nếu có
// 6. Object.freeze(obj):               Đóng băng đối tượng, làm cho nó không thể thêm, sửa, xóa.
// 7. Object.seal(obj):                 Ngăng không cho thêm, xóa thuộc tính, cho phép sửa giá trị.
// ___________________________________________________________________________________________________________________________________

// 1. Object.keys(obj):
let person = {name: "Bao", age: 16};
let keys = Object.keys(person);
console.log(keys);      // ["Name", "age"]

// 2. Object.values(obj):
let person2 = {name: "Lam", city: "Hanoi", age: 18};
let values = Object.values(person2);
console.log(values)     // ["lam", "Hanoi", 18]

// 3. Object.entries(obj):
let person3 = {name: "Duc", age: 15};
let entries = Object.entries(person3);
console.log(entries);   // [["name", "Duc"], ["age", 15]]

// 4. Object.assign(target, source):
const target = {};
const source1 = {a: 1};
const source2 = {b: 2};
Object.assign(target, source1, source2);
console.log(target);    // {a: 1, b: 2}
// Spread để sao chép thuộc tính
const target2 = {...source1, ...source2};
console.log(target2);   // {a: 1, b: 2}

// 5. object.hasOwnProperty(prop):
let person4 = {name: "Huy", age: 30};
console.log(person4.hasOwnProperty("name"))   // True
console.log(person4.hasOwnProperty("job"))    // False

// 6. Object.freeze(obj):
let person5 = {name: "Tho", age: 25};
Object.freeze(person5);
person5.age = 28;       // Thay đổi không có hiệu lực
person5.email = "NguyenNgocLo128.com";     // Không thêm được
delete person5.age;     // Không xóa được
console.log(person5);   // {name: "Tho", age: 25}

// 7. Object.seal(obj):
let person6 = {name: "Thanh", age: 19};
Object.seal(person6);   // Không cho thêm, xóa, chỉ cho phép sửa giá trị
person6.location = "Ho Chi Minh City";      // Bỏ qua
delete person6.age;     // Bỏ qua
person6.age = 24;       // Sửa thành công
console.log(person6);   // {name: "Thanh", age: 24}