import { useState } from 'react'
import './App.css';
import { Moon } from 'lucide-react'
import { useEffect } from 'react';
import moon from './assets/images/moon.svg'

function App() {
  const [theme, setTheme] = useState()
  const [iconColor, setIconColor] = useState()
  const [iconFillColor, setIconFillColor] = useState()
  const [borderColor, setBorderColor] = useState()

  useEffect(() => {
    localStorage.setItem('theme', localStorage.getItem('theme') ?? 'light')
    localStorage.setItem('icon-color', localStorage.getItem('icon-color') ?? '#edeaea')
    localStorage.setItem('fill-color', localStorage.getItem('fill-color') ?? '#e1e1e')
    localStorage.setItem('border-color', localStorage.getItem('border-color') ?? '#fff')    
  }, [theme])

  const toggleAppTheme = () => {
    setTheme(prev => {
      const toggleTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', toggleTheme)      
      return toggleTheme;
    })
    setIconFillColor(prev =>  {
      const toggleFillColor = theme === 'light' ? '#1e1e1e': '#f3f3f3';
      localStorage.setItem('fill-color', toggleFillColor)
      return toggleFillColor
    })
    setIconColor(prev => {
      const toggleIconColor = theme === 'light' ? '#edeaea': '#545353';
      localStorage.setItem('icon-color', toggleIconColor)
      return toggleIconColor
    })
    setBorderColor(prev => {
      const toggleBorderColor =  theme === 'light' ? '#fff': '#000'
      localStorage.setItem('border-color', toggleBorderColor)
      return toggleBorderColor;
    })
  }
  return (
    <div className={localStorage.getItem('theme')}>
      <div style={{ textAlign: 'right', padding: '2rem' }}>
        <button style={{
          borderRadius: '50%', width: '50px', height: '50px', borderRight: '50%',
          backgroundColor: iconFillColor, border: '1px solid', borderCollapse: 'none', borderColor: borderColor
        }}
          onClick={toggleAppTheme}>
          <Moon fill={iconColor} stroke='1px' />
          
        </button>
      </div>
      <h1 style={{ fontSize: '5rem', textAlign: 'center' }}>Welcome</h1>
    </div>
  )
}

export default App
