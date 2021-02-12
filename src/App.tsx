import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // NavLink,
  Navigate,
} from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'

import theme from './theme'

import Home from './pages/Home'
import ColorClasses from './pages/ColorClasses'

interface AppProps {}

function App({}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="color-classes" element={<ColorClasses />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
