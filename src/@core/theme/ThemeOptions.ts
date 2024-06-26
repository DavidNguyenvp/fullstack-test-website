
import { ThemeOptions } from '@mui/material'

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'
import { Mode } from './types'

const themeOptions = (mode: Mode): ThemeOptions => {

  const themeConfig = {
    palette: palette(mode === 'semi-dark' ? 'light' : mode),
    typography: {
      fontFamily: [
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(',')
    },
    shadows: shadows(mode),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6
    },
    mixins: {
      toolbar: {
        minHeight: 56
      }
    }
  }

  return themeConfig
}

export default themeOptions
