const { useState } = React

function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {  //(name-event, obj-event)
      detail: `nội dung comment của lesson ${id}`
    })
    )
  }, 2000)
}
emitComment(1)
emitComment(2)
emitComment(3)
emitComment(4)

function App() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  return (
    <div style={{padding: 20}}>
      <button 
        onClick={() => setShow(!show)}
        style={{marginRight: '20px'}}
      >Toggle</button>
      <button onClick={() => setShow2(!show2)} style={{marginRight: '20px'}}>Toggle</button>
      <button onClick={() => setShow3(!show3)}>Toggle</button>
      {show && <Content />} 
      {show2 && <PreviewAvatar />} 
      {show3 && <Chat />} 
    </div>
  )
}
