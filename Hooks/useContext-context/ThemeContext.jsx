const { useState, createContext } = React

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const toogleTheme = () => {
    setTheme(theme === 'dark' ? 'light': 'dark')
  }

  const value = {
    theme,
    toogleTheme
  }
  return (
    <ThemeContext.Provider value={value}>  {/* có props tên là value, mấy thằng children của thằng provider đều có thể nhận đc dữ liệu theme này */}
      {children}
    </ThemeContext.Provider>
  )
}