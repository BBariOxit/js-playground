// VẤN ĐỀ
// JavaScript nó chạy code theo kiểu ko đợi bố con thằng nào.(js là single threaded)
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
// Một hàm có từ khóa async LUÔN LUÔN trả về một PROMISE. Kể cả khi mày return một giá trị thường,
// JS sẽ tự động bọc (wrap) nó vào một cái Promise.resolve().

async function laySo() {
  return 69
}
const kq = laySo()
console.log(kq)

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
  await new Promise(res => setTimeout(res, 2000))
  console.log('-----có cà phê rồi------')
  console.log('uống cà phê')
}
setTimeout(diMuaCaffe2, 3000)

// Giả lập một việc tốn thời gian (gọi API)
function layThongTinGai() {
  return new Promise((res,rej) => {
    setTimeout(() => {
      const coGai = {ten: 'Ngoc Trinh', soDo: '90-60-90'}
      //giả sử mạng ngon thì resolve, mạng lởm thì reject
      const mangNgon = true

      if(mangNgon) {
        res(coGai)
      } else {
        rej('ko load được, mạng yếu')
      }
    }, 2000)
  })
}

//dùng async-await
const diTanGai = async () => {
  console.log('=============== tán gái ================')
  console.log('1. bắt đầu nhắn tin cho em :))')
  try {
    // dừng ở đây 5s cho đến khi nó trả về kq
    const emIu = await layThongTinGai()
    // dòng này chỉ chay khi dòng trên chạy xong
    console.log(`2. xin chào em ${emIu.ten} có số đo ${emIu.soDo}`)
  } catch(err) {
    // nếu promise bị reject, nó nhảy vào đây
    // Nếu Promise đó Rejected: Thằng await sẽ nhìn thấy cái reject, nó tự động ném (throw) cái lỗi đó ra ngay lập tức.
    // Mà trong JavaScript, cái gì "throw" (ném lỗi) thì thằng try...catch nó sẽ hứng
    console.log('lỗi rồi')
  }
  //dù thành công hay thất bại đều chạy dòng này
  console.log('3. xong việc')
}

setTimeout(diTanGai, 7000)
// setTimeout(() => console.log('4. t chạy trước trong lúc chờ thằng lia await'), 10000)
console.log('4. t chạy trước trong lúc chờ thằng kia await')

//ví dụn mì tôm
const nauMiTom = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Tô mì tôm trứng hồng đào, chúc chích, full toping')
    }, 2000)
  })
}
const anDem = async () => {
  console.log('đói bụng vãi, may còn gói mì tôm, nấu thôi')
  const monAn = await nauMiTom()
  console.log(`bắt đầu ăn ${monAn}, tuyệt với :D`)
}
setTimeout(anDem, 11000)