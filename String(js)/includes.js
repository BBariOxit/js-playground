// includes() dùng để kiểm tra xem một giá trị có tồn tại hay không trong String, Array
// Nó trả về true / false

// cú pháp: string.includes(searchString, position)
// searchString: Cái chuỗi đang đi tìm.
// position (Tùy chọn): Vị trí bắt đầu tìm. Mặc định là 0.

// Dạng 1: Kiểm tra cơ bản
let gift = "Em đã ăn cơm chưa?"
console.log(gift.includes("cơm")) // Kết quả: true
console.log(gift.includes("phở")) // Kết quả: false

// Dạng 2: Có phân biệt hoa thường (Case Sensitive)
let code = "Javascript is fun"
console.log(code.includes("javascript")) // Kết quả: false (Chữ 'j' viết thường thì ko nhận)

// Dạng 3: Bắt đầu tìm từ một vị trí cụ thể
let drama = "Thằng A đánh thằng B, thằng A xin lỗi";
console.log(drama.includes("đánh", 10))
// Kết quả: false (Vì sau vị trí thứ 10 làm gì còn chữ 'đánh' nào)

// Tại sao nên dùng includes() thay vì indexOf()?
// Nếu chỉ cần check điều kiện trong if, dùng includes() nhìn nó "sang" và dễ đọc hơn hẳn cái kiểu so sánh với -1.
// Cách của mấy thằng cổ hủ (indexOf):
if (str.indexOf("bug") !== -1) {
    console.log("Fix đi con!")
}
// Cách của dân Pro (includes):
if (str.includes("bug")) { // Đọc phát hiểu luôn, sạch sẽ
    console.log("Fix đi con!")
}

// nó so sánh theo kiểu ===
[1, 2, 3].includes("1") // false