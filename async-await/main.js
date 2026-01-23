// VẤN ĐỀ
// JavaScript nó chạy code theo kiểu ko đợi bố con thằng nào.
// Nó chạy dòng 1, xong chạy tót xuống dòng 2 luôn, bất chấp dòng 1 đã xong hay chưa

//ASYNC / AWAIT
// Sinh ra để trị cái tính lanh chanh của nó. 
// Biến code Bất đồng bộ (chạy lung tung) thành nhìn như Đồng bộ (chạy lần lượt).
// await đi với promise , còn async đi với function
// Có async thì mới được dùng await

//Thế tao đặt await trước một số 10 (không phải Promise) thì có sao không?"
// -> ko sao cả. Nó sẽ tự hiểu là await Promise.resolve(10).
// -> ko cần thiết, await sinh ra là để đợi những cái tốn thời gian (như gọi API, đọc file, query DB).

//ASYNC
// khi gắn async vào trước một cái hàm (function).
// Ý nghĩa: Ê chúng mày, trong cái hàm này sẽ có những việc tốn thời gian, tao báo trước để chúng mày biết.
// Luật bất thành văn: Muốn dùng await thì bắt buộc phải nằm trong hàm async

//AWAIT
// Mày đặt await trước một hành động tốn thời gian (ví dụ: client.connect()).
// Ý nghĩa: Đứng im tại dòng này! Đợi bố mày kết nối xong xuôi,
// uống miếng nước đã rồi mới được chạy xuống dòng dưới.

// khi ko dùng async/await
function diMuaCaffe() {
  console.log('bắt đầu đi mua')
  setTimeout(() => console.log('-----có cà phê rồi------'))
  console.log('uống cà phê')
}
diMuaCaffe()
//output:
// bắt đầu đi mua
// uống cà phê (chưa có cà phê đã uống, uống ko khí à ?)
// -----có cà phê rồi------ (3s sau mới mang về)
// thấy nó có bị ngu học ko :))

// dùng async/await
async function diMuaCaffe2() {
  console.log('==============async-await=============')
  console.log('bắt đầu đi mua')
  await new Promise(res => setTimeout(res, 3000))
  console.log('-----có cà phê rồi------')
  console.log('uống cà phê')
}
setTimeout(diMuaCaffe2, 5000)
