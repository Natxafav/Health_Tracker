
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/routes'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}

export default App
