// push() là method của Array dùng để:
// Thêm một hoặc nhiều phần tử vào cuối mảng
// Trả về độ dài mới của mảng

// cú pháp: array.push(element1, element2, ..., elementN)
// Có thể tống một lúc cả đống thứ vào cũng được, ko nhất thiết phải từng cái một.

// Dạng 1: Thêm một thằng (Cơ bản nhất)
let luong = ["5 tr", "10 tr"]
let lengthMoi = luong.push("20 tr")
console.log(luong) // Kết quả: ["5 tr", "10 tr", "20 tr"]
console.log(lengthMoi) // Kết quả: 3 (Mảng giờ có 3 phần tử)

// Dạng 2: Thêm một lúc cả đống
let bugList = ["Bug giao dien"]
bugList.push("Bug logic", "Bug server", "Bug vi ngu")
console.log(bugList)
// Kết quả: ["Bug giao dien", "Bug logic", "Bug server", "Bug vi ngu"]


// Thêm object vào mảng
let users = []
users.push({ name: "bao", age: 22 })
console.log(users) // [{ name: "bao", age: 22 }]

//LƯU Ý
/**
 * LÀM THAY ĐỔI MẢNG GỐC: Giống thằng pop, thằng này nó cũng thọc thẳng tay vào mảng gốc để sửa.
 * khi mà dùng trong mấy cái thư viện như React mà ko hiểu về immutability (tính bất biến) thì ăn cứt.
 */
/**
 * Giá trị trả về: nó trả về cái Number (độ dài), chứ ko phải cái mảng mới đâu.
 * Nhiều thằng cứ viết let newArr = arr.push('hi') rồi tưởng newArr là cái mảng,
 * đến lúc log ra thấy số 1 lại khóc tiếng máng.
 */
/**
 * So với unshift(): push là thêm vào ĐUÔI, còn unshift là thêm vào ĐẦU. 
 * Thêm vào đuôi thì nhanh, thêm vào đầu thì chậm vì nó phải đẩy hết mấy thằng cũ lùi ra sau.
 */