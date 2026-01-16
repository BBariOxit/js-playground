function fn() {}

//giống nhau:
    //là các method được kế thừa từ function prototype
    function fn(){}
    console.log(fn.bind === Function.prototype.bind) //true
    console.log(fn.call === Function.prototype.call) //true
    console.log(fn.apply === Function.prototype.apply) //true
/**

 * Bind method
 * - Trả ra hàm mới với `this` tham chiếu tới `thisArg`
 * - Không thực hiện gọi hàm
 * - Nếu được bind kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn
 */
const newFn = fn.bind(thisArg, arg1, arg2, ...)

newFn(arg1, arg2, ...)    

/**
 * Call method
 * - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
 * - Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`
 */
fn.call(thisArg, arg1, arg2, ...)

/**
 * Apply method
 * - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
 * - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`
 */
fn.apply(thisArg, [arg1, arg2, ...])