// Toản tử tăng giảm 
/*
++
--
*/
// CT
/*
x = 1
x++
x--
*/
// YN
/*
x = 1
x = x + 1
x = x - 1
*/

console.log("Toán tử tăng giảm trong JavaScript");
let a = 99;
let b = 10;
let c = 77;
let d = 88;

a++; // a = a + 1
b--; // b = b - 1
++c; // c = c + 1
--d; // d = d - 1
// Lưu ý: ++ và -- trước hay sau đề được

console.log("Giá trị của a sau phép tăng là: " + a);
console.log("Giá trị của b sau phép giảm là: " + b);
console.log("Giá trị của c sau phép tăng là: " + c);
console.log("Giá trị của d sau phép giảm là: " + d);
// ___________________________________________________________________________
// Trường hợp biểu thức phức tạp
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log("Giá trị của z là: " + z); 
// z = 1 - 3 + 1 = -1
// Lưu ý: a++, a-- (Postfix)
       // ++a, --a (Prefix)
            // giải bài toán trên như sau:
            // B1: ++y => y = 3
            // B2: x = 1, y = 3 => z = 1 - 3 + 1 = -1
            // B3: z = -1
            // B4: x++ => x = 2
// *Suy ra thứ tự ưu tiên qua các bước:
            // 1. Prefix
            // 2. tiếp tục tính toán
            // 3. gán giá trị cho z
            // 4. Postfix