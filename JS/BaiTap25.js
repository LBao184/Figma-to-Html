// Viết chương trình kiểm tra mật khẩu: 
/*
1. Mật khẩu phải có ít nhất 6 ký tự
2. chứa ít nhất 1 chữ cái viết hoa
3. chứa ít nhất 1 chữ cái viết thường
4. chứa ít nhất 1 chữ số
*/

function kiemTraMatKhau(matKhau) {
    // Kiểm tra độ dài mật khẩu
    if (matKhau.length < 6) {
        return "Mật khẩu phải có ít nhất 6 ký tự.";
    }
    // Kiểm tra chữ cái viết hoa    
        if (!/[A-Z]/.test(matKhau)) {
        return "Mật khẩu phải chứa ít nhất 1 chữ cái viết hoa.";
    }
    // Kiểm tra chữ cái viết thường
    if (!/[a-z]/.test(matKhau)) {
        return "Mật khẩu phải chứa ít nhất 1 chữ cái viết thường.";
    }
    // Kiểm tra chữ số
    if (!/[0-9]/.test(matKhau)) {
        return "Mật khẩu phải chứa ít nhất 1 chữ số.";
    }
    return "Mật khẩu hợp lệ.";
}