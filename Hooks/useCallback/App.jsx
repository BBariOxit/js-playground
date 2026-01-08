const { useState, useCallback } = React

// useCallback sinh ra để tránh tạo ra hàm mới ko cần thiết trong func compnt
function App() {
  const [count, setCount] = useState(0)

  //hàm handleIncrease khi truyền vào trong MemoContent thông qua props thì khi click me giá trị thay đổi nhưng hàm logic đâu dổi mà sao nó lại render lại Content ?

  // lần đầu ứng dụng chạy -> App đc mounted -> tạo pham vi của hàm App 
  // -> nó tạo ra hàm arrow func tạo ra 1 tham chiếu và gắn tham chiếu vào handleIncrease(nó lưu vào bộ nhớ và trả ra tham chiếu của hàm)
  // truyền tham chiếu của hàm vào props là onIncrease={handleIncrease} 
  // khi ấn button Click me bên trong MemoContent compnt -> setCount -> re-render lại App compnt 
  // khi re-render lại App compnt thì nó gọi lại hàm App -> nó tạo ra một phạm vi mới độc lập ko liên quan gì tới phạm vi trước đó nữa
  // khi đó thì nó lại tạo hàm arrow func với 1 tham chiếu mới và gắn tham chiếu mới vào handleIncrease
  // qua bên content thì React memo lấy tham chiếu cũ so sánh với tham chiếu mới (so sánh với shallow compare(===))
  // thấy trả về false khi so sánh -> re render lại thằng content
  // => xài useCallback để khắc phục

  //hàm handleIncrease cũ
  const handleIncrease = () => {
    setCount(prev => prev + 1)
  }


  // khi app đc mounted -> useCallback nhận đc cái callback của nó 
  // -> tạo hàm , nhận lại tham chiếu và lưu ra ngoài phạm vi hàm App(tự nó lưu)
  // nó return cái tham chiếu đó cho biến handleIncrease
  // khi ấn click me , nếu mà deps trống thì nó sẽ trả lại tham chiếu trước đó thay vì tạo ra hàm mới
  // const handleIncrease = useCallback(() => {  //useCallback(callback, [deps]), cái deps tương tự như useEffect
  //   setCount(prev => prev + 1)
  // }, [])
  return (
    <div className="wapper" style={{padding: 20}}>
      {/* bởi vì <Content /> là con, nên mỗi khi render lại component cha thì component con cũng re-render */}
      {/* <Content onIncrease={handleIncrease}/> */}
      {/* đã sài memo nên ko bị render lại ko cần thiết, chỉ khi nào truyền vào props thay đổi mới bị render*/}
      <MemoContent onIncrease={handleIncrease}/>  
      <h1>{count}</h1>
    </div>
  )
}