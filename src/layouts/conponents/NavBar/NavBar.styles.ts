import { AppBar, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const NavBarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
}));

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: "none",
}));

export const Logo = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  position: "absolute",
  top: 0,
  left: "22rem",
  zIndex: 1,
}));

export const ToolBarContainer = styled(Toolbar)(({ theme }) => ({
  height: "79px",
  "& .menu-button": {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  "& .horizontal-menu": {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    marginLeft: "32rem",
    flexDirection: "row",
    gap: 75,
  },
  "& .menu-item": {
    textDecoration: "none",

    "& .menu-text": {
      fontSize: "1.1rem",
      color: theme.palette.text.primary,
      textTransform: "uppercase",
    },
  },
  "& .active": {
    borderBottom: "2px solid",
    borderColor: theme.palette.action.focus,
  },
}));
