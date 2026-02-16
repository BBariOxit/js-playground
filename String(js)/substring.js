// Cái hàm substring() này nó giúp trích xuất các ký tự từ một chuỗi, bắt đầu từ một vị trí này đến một vị trí kia.
// cú pháp: string.substring(indexStart, indexEnd)

// vidu1
let text = "CaiLoaiCodeNguNhuCho"
// Lấy từ vị trí thứ 3 đến vị trí thứ 7
let slide1 = text.substring(3,7)
console.log(slide1) //Loai
// Chỉ truyền indexStart
let slice2 = text.substring(7)
console.log(slice2) //CodeNguNhuCho => lấy hết phần còn lại

// Tự động hoán đổi vị trí: Nếu ngu đến mức truyền indexStart lớn hơn indexEnd (ví dụ substring(10, 2)),
// thì cái hàm này nó tự đảo lại thành substring(2, 10). Nó thông minh hơn đấy.

// Số âm là rác: Nếu truyền số âm (như -5) hoặc NaN, nó coi như là số 0. 
// ko có chuyện lấy ngược từ cuối lên như thằng slice() đâu nhé. Đừng có râu ông nọ cắm cằm bà kia.

// Hàng cũ: Giờ dân chuyên nghiệp hay dùng slice() hơn vì nó xử lý được cả số âm, 
// linh hoạt hơn cái đồ cổ substring này.