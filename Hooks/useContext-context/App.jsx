const { useContext } = React
//context
//compA => compB => compC 
// bình thường muốn truyền dữ liệu xuống cho compC thì cần phỉa truyền trung gian compB thông qua props
// với context thì ko cần phải làm như vậy nữa, có thể truyền dữ liệu thẳng từ compA tới bất kỳ comp con  

//1. create context
//2. provider
//3. consumer
//theme: dark/light
function App() {
  const context = useContext(ThemeContext)
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toogleTheme}>Toggle Theme</button>
      <Content />
    </div>
  )
}
