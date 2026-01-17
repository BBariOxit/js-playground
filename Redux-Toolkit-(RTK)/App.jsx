import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./counterSlice"

function App() {
  const dispatch = useDispatch()
  //lấy giá trị từ store
  const count = useSelector(state => state.counter?.value)
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '50px' }}>
      <h1>Counter</h1>
      <h2 style={{ fontSize: '4rem', margin: '20px 0' }}>{count}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer' }}  
          onClick={() => dispatch(increment())}
        >
          Tăng
        </button>
        <button
          style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer' }}
          onClick={() => dispatch(decrement())}
        >
          Giảm
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
        >
          Tăng 10
        </button>
      </div>
    </div>
  )
}

export default App