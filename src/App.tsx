import React from 'react'
import './styles/_base.scss' //base style

import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import Routers from './Routers'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans- serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 10,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routers />
      </div>
    </ThemeProvider>
  )
}

export default App
