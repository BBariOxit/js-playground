//pop() là một method của Array dùng để:
// Xóa phần tử cuối cùng của mảng
// Trả về phần tử vừa bị xóa

// cú pháp: array.pop()
// Tham số: ko có tham số nào cả. truyền gì vào nó cũng mặc kệ.

// Dạng 1: Xóa và lấy giá trị
let moneyBag = ["10k", "20k", "5k"]
let biggest = moneyBag.pop()
console.log(biggest) // Kết quả: "5k"
console.log(moneyBag) // Kết quả: ["10k", "20k"]

// Dạng 2: Mảng rỗng thì sao?
// Nếu mày cố tình "pop" một cái mảng ko có gì nó sẽ trả về undefined.
let crush = []
console.log(crush.pop()) // Kết quả: undefined

// Thường dùng trong Stack (ngăn xếp – LIFO)
let stack = []
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.pop()) // 30
console.log(stack.pop()) // 20

// lưu ý
/**
 * LÀM THAY ĐỔI MẢNG GỐC: nhớ kỹ cái này! Khác với mấy cái hàm String trả về chuỗi mới, 
 * pop() nó thọc thẳng tay vào mảng gốc và vứt phần tử đi luôn. Mất là mất luôn, ko tìm lại được đâu.
 */
/**
 * Độ dài mảng (length): Sau khi pop(), cái length của mảng sẽ giảm đi 1
 */
/**
 * Hiệu năng (Performance): Trong các loại hàm xóa, pop() là thằng nhanh nhất 
 * vì nó chỉ việc vứt thằng cuối cùng đi, ko phải dịch chuyển vị trí của mấy thằng khác trong mảng.
 */
