## Value types & Reference types

### 1. Value types (Primitive data types)
    - String
    - Number
    - Boolean
    - BigInt
    - Symbol
    - undefined
    - null (Lưu ý: typeof null trả về "object", đây là cái bug huyền thoại của JS, đừng có ngu mà bảo nó là Object thật nhé!) 

### 2. Reference types (Non-primitive data types)
    Object (Thằng tổ sư, mọi thứ dưới đây đều là Object)
    Array (Thực chất cũng là Object thôi)
    Function (Cũng là Object nốt, nhưng gọi được)
    Date
    RegExp (Biểu thức chính quy - cái thứ làm mày nổ não)
    Map & Set (ES6+ dùng suốt ngày)

## Data types with functions
    Value types: Pass-by-value (Truyền tham trị - copy giá trị)
    Reference types: Pass-by-reference (Truyền tham chiếu - copy địa chỉ ô nhớ)