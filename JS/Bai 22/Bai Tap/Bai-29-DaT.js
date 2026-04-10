// Bài tập JS 29: Viết chương trình nhập vào năm sinh và in ra số tuổi, kiểm tra người dùng nhập đúng định dạng hay không
let birthYear = prompt("Nhập vào năm sinh của bạn:");
// Kiểm tra định dạng năm sinh
if (!birthYear || isNaN(birthYear)) {
    console.log("Bạn đã nhập sai định dạng năm sinh!");
} else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    console.log(`Bạn hiện tại ${age} tuổi.`);
}

// Cách 2:
function calculateAge(inputYear) {
    let yearOfBirth = Number(inputYear);
    console.log(yearOfBirth);
    console.log(!Number.isInteger(yearOfBirth));
    console.log(yearOfBirth <= 0);
        if(!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
            alert("Bạn đã nhập sai định dạng năm sinh!");
            return;
        }
            let currentYear = new Date().getFullYear();
            let age = currentYear - yearOfBirth;
                console.log(`Bạn hiện tại ${age} tuổi.`);
}