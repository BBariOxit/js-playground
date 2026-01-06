'use strict' //toàn bộ file

let fullName = 'Nguyen van A' // biến fullName ở global

function testFunc() {
  // 'use strict' //dùng trong phạm vi

  let age = 18 // biến age cũng ở global
}
testFunc()
console.log(fullName)
// console.log(age)

// const student = Object.freeze({ // chỉ đọc
//   secondName: 'hahah'
// })

const student = {}
Object.defineProperty(student, 'secondName', {
  value: 'hahahha',
  writable: false //cho phép sửa hay ko, strict mode sẽ báo lỗi 
}) //(obj, name property, {})
// student.secondName = 'huhuhu'  // strict mode sẽ báo lỗi
console.log(student)


const  student2 = {
  name: 'PTB'
}
// delete student2 //nếu ko có strict mode nó sẽ ko báo lỗi


