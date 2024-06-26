
import { styled } from '@mui/material/styles'

export const Layout = styled("div")(( { theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: theme.palette.background.default,
}))
