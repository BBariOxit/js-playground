const { useContext } = React

function Paragraph() {
  const context = useContext(ThemeContext)
  console.log('theme: ', context.theme)
  
  return (
    <div>
      <p className={context.theme}>
        React code is made of entities called components. These components are modular and can be reused. 
        React applications typically consist of many layers of components. The components are rendered to 
        a root element in the DOM using the React DOM library. When rendering a component, values are passed 
        between components through props (short for "properties"). Values internal to a component are called its state.
      </p>
    </div>
  )
}
