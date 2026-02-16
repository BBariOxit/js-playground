// slice() nó là bản nâng cấp tiến hóa hơn cái substring rẻ rách kia nhiều.
// Nó linh hoạt, nó hiểu ý đồ của dev, và quan trọng là nó ko tự tiện đảo ngược vị trí như thằng substring.

// cú pháp : string.slice(indexStart, indexEnd)

// ví dụ dạng 1: Cắt kiểu cơ bản
// Giống hệt substring, lấy một đoạn ở giữa.
let str = "CodeNguThiChet"
console.log(str.slice(4,7))// Kết quả: "Ngu"

// Dạng 2: Cắt từ cuối chuỗi
// Dùng số âm để đếm ngược từ phải sang trái. -1 là ký tự cuối cùng, -2 là áp chót...
let dev = "ThangDevSapBurnout"
console.log(dev.slice(-7))
console.log(dev.slice(-10, -7)) //Burnout
console.log(dev.slice(-5, -1)) //rnou

//Dạng 3: Bỏ qua indexEnd
// Lấy từ vị trí chỉ định cho tới khi hết sạch chuỗi thì thôi.
let job = "SángHọpChiềuCodeĐêmFixBug"
console.log(job.slice(15))

// Dạng 4: Khi truyền tham số ngu (Start > End)
console.log("thangngunay".slice(5, 2)) 
// Kết quả: "" (Chuỗi rỗng, vì 5 làm sao nhỏ hơn 2 được)