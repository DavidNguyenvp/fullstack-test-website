// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

// ** Theme
import themeOptions from './ThemeOptions'
import { Mode } from './types'

interface Props {
  mode: Mode,
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  const { mode, children } = props

  const coreThemeConfig = themeOptions(mode)
  let theme = createTheme(coreThemeConfig)
  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
