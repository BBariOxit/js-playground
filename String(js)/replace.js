// replace() là phương thức của String dùng để thay thế một phần nội dung trong chuỗi.

// cú pháp: string.replace(searchValue, newValue)
// searchValue: Cái muốn vứt đi (có thể là một chuỗi hoặc một cái biểu thức chính quy - RegExp).
// newValue: Cái muốn nhét vào chỗ đó.

// Dạng 1: Thay thế cơ bản
// Thằng replace() mặc định chỉ thay thế thằng đầu tiên nó tìm thấy thôi.
let status1 = "Code ngu, fix ngu, ngủ cũng ngu"
let newStatus = status1.replace("ngu", "giỏi")
console.log(newStatus) // Kết quả: "Code giỏi, fix ngu, ngủ cũng ngu"

// Dạng 2: Thay thế TẤT CẢ (Dùng replaceAll)
// Nếu muốn diệt tận gốc, dùng replaceAll()
let talk = "Thằng nhỏ, con nhỏ, đồ nhỏ"
console.log(talk.replaceAll("nhỏ", "bé"))
// Kết quả: "Thằng bé, cái bé, đồ bé"

// Dạng 3: Dùng Regex để thay thế toàn bộ
// dùng biểu thức chính quy với flag /g (global).
let str = "bug bug bug"
console.log(str.replace(/bug/g, "feature"))
// Kết quả: "feature feature feature"

let text = "banana"
let result = text.replace(/a/g, "x")
console.log(result) // bxnxnx

//Dạng 4: Dùng hàm làm giá trị thay thế
let nums = "2 + 3 = 5"
let kq = nums.replace(/\d+/g, (match) => { 
// /\d+/g: Tìm tất cả các cụm số trong chuỗi
// \d = digit,   \d+ nghĩa là: Một hoặc nhiều chữ số liên tiếp
  return match * 2
})
console.log(kq)

// Những lưu ý
// Tính bất biến (Immutability): Hàm này ko thay đổi chuỗi gốc. Nó trả về một chuỗi MỚI.
let namee = "Ga"
namee.replace("Ga", "Pro")
console.log(namee) // Vẫn là "Ga"

// Phân biệt hoa thường: nó phân biệt "A" và "a".
// Muốn kệ mẹ hoa thường thì dùng Regex /i, /gi (ignore case).
let text2 = "Mr JavaScript"
console.log(text.replace(/javascript/i, "Python"))

