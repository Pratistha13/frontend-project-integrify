import { createTheme, Switch, ThemeProvider } from '@material-ui/core'
import { teal, green } from '@material-ui/core/colors'
import React, { useState } from 'react'

const Themes = ({ children }: any) => {
  const [darkState, setDarkState] = useState(false)
  const palletType = darkState ? 'dark' : 'light'
  const mainPrimaryColor = darkState ? teal[500] : '#009688'
  const mainSecondaryColor = darkState ? green[400] : '#00a152'

  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  })
  const handleThemeChange = () => {
    setDarkState(!darkState)
  }
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Switch checked={darkState} onChange={handleThemeChange} />
        {darkState ? 'Light' : 'Dark'}
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Themes
