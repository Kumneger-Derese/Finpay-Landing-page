/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({})

const ThemeContextProvider = ({ children }) => {
  const currentTheme = JSON.parse(localStorage.getItem('isDark'))
  const [isDark, setIsDark] = useState(currentTheme)

  const toggleTheme = () => {
    setIsDark(prevTheme => !prevTheme)
  }

  // Save the theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark))
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  return useContext(ThemeContext)
}

export { ThemeContext, useTheme }
export default ThemeContextProvider
