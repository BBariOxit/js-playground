function createCounter() {
  let counter = 0 //counter được tạo trong phạm vi hàm createCounter

  function increase() { //cái này cũng thế
    return ++counter  //truy cập được biến ở bên ngoài phạm vi của nó(vì bên trong phạm vi của nó ko có nên nó nhảy ra ngoài nó tìm)
  }

  return increase 
}

const counter1 = createCounter() //nhưng lại gán hàm increase vào biến global là counter1

console.log(counter1())  //hàm nó nhớ nơi nó được tạo ra là ở trong phạm vi của hàm createCounter nên nó có thể sử dụng biến counter 
console.log(counter1())
console.log(counter1())


const counter2 = createCounter() //một môi trường mới được tạo ra => chạy lại từ đầu

console.log(counter2())
console.log(counter2())
console.log(counter2())

//VD log

function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`)
  }

  return logger
}
// ============= APP =============
// register.js

const infoLogger = createLogger('info')
infoLogger('bắt đầu gửi mail')
infoLogger('gửi mail lỗi lần 1, thử gửi lại...')
infoLogger('gửi mail thành công cho user xxx')

//forgotPassword.js
const errorLogger = createLogger('Error')
errorLogger('Email ko tồn tại trong DB')
errorLogger('gửi mail lỗi lần 1, thử gửi lại...')
errorLogger('gửi mail thành công cho user xxx')

//VD localstorage

function createStorage(key) {
  const store = JSON.parse(localStorage.get(key)) ?? {}

  const storage = {
    get(key) {
      return store[key]
    },
    set() {

    },
    delete() {

    }
  }

  return storage
}

