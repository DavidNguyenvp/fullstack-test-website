import { PaletteMode } from "@mui/material"

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string
      main: string
      light: string
      bodyBg: string
      darkBg: string
      lightBg: string
      trackBg: string
      tableHeaderBg: string
      primaryGradient: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      darkBg?: string
      lightBg?: string
      trackBg?: string
      tableHeaderBg?: string
      primaryGradient?: string
    }
  }
}

export {}

export type Mode = PaletteMode | 'semi-dark'
