import { PaletteMode } from "@mui/material"


const DefaultPalette = (mode: PaletteMode) => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = '0, 0, 0'
  const darkColor = '231, 227, 252'
  const mainColor = mode === 'light' ? lightColor : darkColor


  const defaultBgColor = () => {
  if (mode === 'light') {
      return whiteColor;
    } else return '#151E30'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      trackBg: "red",
    },
    mode: mode,
    common: {
      black: "#000",
      white: whiteColor,
    },
    primary: {
      light: "#9E69FD",
      main: "#9155FD",
      dark: "#804BDF",
      contrastText: whiteColor,
    },
    secondary: {
      light: "#9C9FA4",
      main: "#8A8D93",
      dark: "#777B82",
      contrastText: whiteColor,
    },
    error: {
      light: "#FF6166",
      main: "#FF4C51",
      dark: "#E04347",
      contrastText: whiteColor,
    },
    warning: {
      light: "#FFCA64",
      main: "#FFB400",
      dark: "#E09E00",
      contrastText: whiteColor,
    },
    info: {
      light: "#32BAFF",
      main: "#b34808",
      dark: "#139CE0",
      contrastText: whiteColor,
    },
    success: {
      light: "#6AD01F",
      main: "#56CA00",
      dark: "#4CB200",
      contrastText: whiteColor,
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#F5F5F5",
      A200: "#EEEEEE",
      A400: "#BDBDBD",
      A700: "#616161",
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? whiteColor : "#222B45",
      default: defaultBgColor(),
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: "red",
    },
  };
}

export default DefaultPalette
