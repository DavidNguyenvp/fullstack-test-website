import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  margin: "3rem 18rem",
  "& .MuiPaper-elevation": {
    padding: "0.375rem 0",
  },

  [theme.breakpoints.down("md")]: {
    margin: "3rem 2rem",
  },
  background: theme.palette.common.white,
  "& .title": {
    color: theme.palette.text.primary,
    marginTop: 30,
    marginBottom: 80,
  },
  "& .content": {
    fontSize: "1.2rem",
    color: theme.palette.text.secondary,
    lineHeight: "30.5px",
    "& a, p": {
      color: theme.palette.text.secondary,
    },
  },
  "& .time, .yield": {
    display: "flex",
    gap: 20,
    alignItems: "center",
    marginTop: "50px",
    "& .timeItems, .yieldItems": {
      display: "flex",
      gap: 35,
      alignItems: "center",
    },

    "& .MuiTypography-root": {
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "30px",
    },
    "& .time-title": {
      textTransform: "uppercase",
      fontSize: "14px",
    },
    "& .MuiSvgIcon-root": {
      width: 50,
      height: 50,
    },
  },

  "& .divider": {
    marginTop: "20px",
  },
  "& .yield": {
    marginTop: "10px",
  },
  "& .save-button, .print-button": {
    height: "40px",
    borderColor: theme.palette.customColors.trackBg,
    color: theme.palette.text.primary,
    fontWeight: "bold",
    fontSize: "16px",
    textTransform: "capitalize",
    "& .MuiSvgIcon-root": {
      widht: 30,
      height: 30,
    },
  },
  "& .image-container": {
    maxWidth: "100%",
    margin: "0 auto",
  },
  "& .product-image": {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    paddingLeft: theme.spacing(15),
  },
}));
