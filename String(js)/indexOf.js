// Trong JavaScript, indexOf() là một phương thức dùng để tìm vị trí (index) của một phần tử trong chuỗi (String) hoặc mảng (Array).

// cú pháp: string.indexOf(searchValue, fromIndex)
// searchValue: Cái chuỗi muốn tìm. (Tìm con Lan thì điền "Lan").
// fromIndex (Tùy chọn): Vị trí bắt đầu tìm. Mặc định là 0 (tìm từ đầu chí cuối).

// Dạng 1: Tìm thấy thì trả về Index
let devLife = "Code, Fix Bug, Sleep, Repeat"
console.log(devLife.indexOf("Fix Bug"))
// Kết quả: 6 (Vì chữ 'F' nằm ở vị trí thứ 6)

// Dạng 2: ko tìm thấy (Cay đắng)
console.log(devLife.indexOf("Gái xinh"))
// Kết quả: -1

// Dạng 3: Tìm từ một vị trí nhất định
let s = "Học, học nữa, học mãi, đuổi học"
console.log(s.indexOf("học", 5))
// Kết quả: 5 (Nó bỏ qua chữ 'Học' đầu tiên vì bắt đầu tìm từ index 5)


// LƯU Ý
// Phân biệt hoa thường (Case Sensitive): indexOf("Code") khác hoàn toàn indexOf("code").
// khi mà truyền sai case thì nó trả về -1 ngay.

// Chỉ trả về thằng ĐẦU TIÊN: Nếu trong chuỗi có 10 chữ "Bug", nó cũng chỉ trả về vị trí 
// của thằng "Bug" đầu tiên nó thấy. Muốn tìm thằng cuối cùng? Dùng lastIndexOf().

// Hàng hiện đại includes(): Thời buổi này, nếu chỉ muốn biết chuỗi đó "có hay không" (True/False)
// mà ko quan tâm vị trí, thì dùng includes() cho nó sang.
// indexOf chỉ dùng khi thực sự cần cái con số vị trí đó thôi.