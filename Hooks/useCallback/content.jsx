const { useEffect, useState } = React
 
function Content({ onIncrease }) { 

  console.log('rerender')
  return (
    <>
      {/*trường hợp có truyền props , count thay đổi -> render lại  */}
      <h2>HELLO ANH EM</h2>
      <button onClick={onIncrease}>Click me</button>
    </>
  )
}
//nhận vào 1 component, nó check các props của component này sau mỗi lần render có bị thay đổi hay ko
const MemoContent = React.memo(Content)
// export default memo(Content)