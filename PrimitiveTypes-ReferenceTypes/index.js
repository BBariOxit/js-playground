// Value types
let a = 1
// với let a = 1, tạo ra biến a, cấp 1 ô nhớ, lưu 1 vào ô nhớ
// Biến     Giá trị     Ô nhớ
//  a          1           1 
let b = a
// với let b = a , tạo ra biến b, cấp 1 ô nhớ khác , sao chép giá trị cảu a là 1 vào ô nhớ mới
// Biến     Giá trị     Ô nhớ
//  a          1           1 
//  b          1           1 
a = 2
// với a = 2, sửa giá trị trong ô nhớ a thành 2
// Biến     Giá trị     Ô nhớ
//  a          2           2 
//  b          1           1 
console.log(b)
// a và b đc cấp 2 ô nhớ khác nhau nên việc sửa a = 2 ko ảnh hưởng gì tới b

//reference types
const c = {
  name: 'Mercedes' 
}
// với const c = {name: 'Mercedes'}: tạo biến c, cấp 1 ô nhớ,
// lưu {name: 'Mercedes'} vào ô nhớ , trả về địa chỉ đã lưu và gán cho biến c(giá trị)
// Biến     Giá trị     Địa chỉ         Ô nhớ
//  c        <#001>      `#001   {name: 'Mercedes'}
const d = c
// với const d = c, tạo biến d, trỏ biến d tới cùng địa chỉ ô nhớ của biến c
// Biến     Giá trị     Địa chỉ         Ô nhớ
//  c        <#001>      `#001   {name: 'Mercedes'}
//  d        <#001>
c.name = 'BMW'
// với c.name = 'BMW': sửa giá trị key name trong ô nhớ thành 'BMW'
// Biến     Giá trị     Địa chỉ      Ô nhớ
//  c        <#001>      `#001    {name: 'BMW'}
//  d        <#001>
console.log(d)
// output: 'BMW' vì c, d được trỏ cùng tới 1 ô nhớ nên việc sửa đổi giá trị của obj thông qua c, d là như nhau

let e = {
  name: 'Mercedes'
}
e = {
  name: 'BMW',
  mode: 'i8'
}
//luôn có 1 vùng nhớ mới đc tạo ra với obj, func, arr mới đc tạo ra(gán lại)
// Biến     Giá trị     Địa chỉ               Ô nhớ
//  e        <#002>      `#001          {name: 'Mercedes'}
//                       `#002      {name: 'BMW', model: 'i8'}


//trường hợp obj chứa obj con
const student = {
  name: 'Phan Bảo',
  profile: {
    firstName: 'Phan',
    lastName: 'Bảo',
    introduction: 'man'
  }
}
// student đang lưu địa chỉ ô nhớ của obj đã gán nó
// key profile trong obj trên cũng đang lưu địa chỉ ố nhớ của obj đã gán cho nó

//   Biến       Giá trị     Địa chỉ                             Ô nhớ
//                           `#001      {firstName: 'Phan', lastName: 'Bảo', introduction: 'man'}
//  student     <#002>       `#002                      {name: 'Phan Bảo', profile: <#001>}

//profile được tham chiếu tới obj `#001 ở bên trên

function sum(a,b) { // lúc này a và b là 2 vùng nhớ mới có giá trị của x, y
  //let a = x
  //let b = y
  a = 0 // gán vô cùng nhớ mới, ko ảnh hưởng bên ngoài
  b = 0
  console.log(a,b)
}
const x = 1
const y = 2
sum(x,y)
console.log(x, y)

//output: 0 0    1 2

//VD
function func(obj) {
  // giống như let obj = block, lúc này biến a chỉ chứa địa chỉ của object đó
  // -> chép địa chỉ sang biến obj, nên biến obj cũng trỏ về địa chỉ vùng nhớ của biến block
  // sửa dữ liệu bên trong thì biến block cũng vậy (tại cùng địa chỉ)
  obj.name = 'Mercedes'
  console.log(obj)
}
const block = {
  name: 'BMW'
}
func(block)
console.log(block)


//VD khắc phục
function createCar(obj) {
  // tạo object mới
  // nó nhận obj  -> stringify biến thành chuỗi JSON -> nó lại parse thành cái object 
  // -> vì vậy nó tạo ra 1 object mới trong vùng nhớ mới
  // obj = JSON.parse(JSON.stringify(obj)) //dành cho object nhiều cấp sâu
  obj = {...obj} //object mới, dành cho kiểu object 1 cấp
  obj.name = 'Mercedes' //sửa trên object mới ở vùng nhớ mới ko ảnh hưởng tới object car
  return obj
}
const car = {
  name: 'BMW'
}
const newCar = createCar(car)
console.log(car)
console.log(newCar)

//so sánh 2 object
const aa = { //trả địa chỉ vùng nhớ lưu vào biến aa(vd: 001)
  name: 'BMW'
}
const bb = { //trả địa chỉ vùng nhớ lưu vào biến bb(vd: 002)
  name: 'BMW'
}
console.log(aa === bb) //false, 2 địa chỉ vùng nhớ khác nhau