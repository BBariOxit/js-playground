const { useState } = React

function App() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  return (
    <div style={{padding: 20}}>
      <button 
        onClick={() => setShow(!show)}
        style={{marginRight: '20px'}}
      >Toggle</button>
      <button onClick={() => setShow2(!show2)}>Toggle</button>
      {show && <Content />} 
      {show2 && <PreviewAvatar />} 
    </div>
  )
}
