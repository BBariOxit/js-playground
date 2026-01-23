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
// Bản chất: async function = new Promise(...).

async function laySo() {
  return 69
}
const kq = laySo()
console.log(kq) // Nó in ra: Promise { <fulfilled>: 69 }

//AWAIT
// Mày đặt await trước một hành động tốn thời gian (ví dụ: client.connect()).
// Ý nghĩa: Đứng im tại dòng này! Đợi bố mày kết nối xong xuôi,
// uống miếng nước đã rồi mới được chạy xuống dòng dưới.


// cơ chế hoạt động của await(deep)
// Javascript là Single Threaded (đơn luồng) - nó chỉ có 1 thằng công nhân làm việc.
// Vậy tại sao await dừng lại chờ mà app không bị treo?
// Bí mật nằm ở chỗ: await không chặn (block) toàn bộ chương trình, nó chỉ chia cái hàm async ra làm hai.
async function viDu() {
  console.log('======== cơ chế await ========')
  console.log('A: Chạy ngay lập tức') // Phần 1
  await layDataTuServer() // điểm cắt
  // bất kỳ hàm gọi API nào như fetch, axios.get nó đều trả về promise
  console.log("B: Chạy sau khi có data") // phần 2
}
// Chạy Phần 1: JS chạy code đồng bộ từ trên xuống in ra A.
// Gặp await -> Nó gọi hàm layDataTuServer() -> Nó thấy đây là Promise
// -> QUAN TRỌNG: Nó TẠM DỪNG việc thực thi hàm viDu lại ngay tại dòng này.
// Nó ném toàn bộ phần code phía sau (Phần 2: console.log("B")) vào một cái hàng đợi đặc biệt gọi là Microtask Queue(event loop)
// Thoát ra ngoài: Thằng JS (Main Thread) nhảy ra khỏi hàm viDu, 
// -> đi làm việc khác ở bên ngoài (ví dụ render giao diện, xử lý click chuột...). Nhờ thế app ko bị đơ.
// Quay lại: Khi cái Promise layDataTuServer chạy xong (Resolve), thằng JS sẽ quay lại,
// -> lôi cái Phần 2 từ trong hàng đợi ra và chạy tiếp.

//THÊM
// async-await nó chỉ là cách viết khác của Promise Chains (.then()) kết hợp với Generators.
// khi viết bthg
async function test() {
    console.log("1")
    await delay(1000)
    
}
//nhưng thực chất
function test() {
  console.log("1")
  return delay(1000).then(() => {
    console.log("2")
  })
}
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