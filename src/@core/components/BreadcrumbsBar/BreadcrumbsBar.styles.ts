import Breadcrumbs from "@mui/material/Breadcrumbs";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const BreadcrumbsContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5, 2.5),
  boxShadow: "none",
  display: "flex",
  flexDirection: "row",
  "& .MuiBreadcrumbs-separator": {
    fontSize: "12px",
    color: theme.palette.info.main,
  },
}));

export const ArrowBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  "& li": {
    display: "inline-flex",
    paddingTop: theme.spacing(1),
    height: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.spacing(4),
    },

    "& a, p": {
      textDecoration: "none",
      color: theme.palette.text.primary,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      textTransform: "uppercase",
      fontWeight: "500",
      fontSize: "12px",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(4),
      },
    },

    "& a:hover": {
      textDecoration: "underline",
      color: theme.palette.success.dark,
    },
    "& svg": {
      color: theme.palette.text.primary,
    },
    "& svg:hover": {
      color: theme.palette.success.main,
    },
  },
}));
