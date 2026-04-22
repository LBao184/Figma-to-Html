// Classlist:
// 1. Classlist.add():      Thêm 1 class mới vào phần tử.
// 2. ClassList.remove():   Xóa 1 class khỏi phần tử.
// 3. ClassList.toggle():   Loại bỏ 1 class nếu nó đã tồn tại và thêm nếu chưa có.
// 4. ClassList.replace():  Thay thế 1 Class cũ = 1 Class mới.
// 5. ClassList.contains(): Kiểm tra xem phần tử có chứa 1 Class cụ thể không.

// Cú pháp chung:
element.classList.method("Tên Class");

// Các method quan trọng:
// ✅ add() – thêm class
box.classList.add("active");

// ❌ remove() – xóa class
box.classList.remove("active");

// 🔥 replace() - Thay thế class
box.classList.replace ("active", "new-active");

// 🔁 toggle() – bật / tắt class
box.classList.toggle("active");
// 👉 Nếu có → xóa
// 👉 Nếu chưa có → thêm