import BreadcrumbsBar from "@/@core/components/BreadcrumbsBar/BreadcrumbsBar";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsInputSvideoOutlinedIcon from "@mui/icons-material/SettingsInputSvideoOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import Image from "next/image";
import { Product } from "@/types/app";
import LoadingIndicator from "@/layouts/conponents/LoadingIndicator";

const QickBread = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/product");
      const data: Product = await response.json();
      setProduct(data);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) <LoadingIndicator isLoading={loading} />;

  if (product === null) <></>;
 
  return (
    <Page>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={6}>
          <BreadcrumbsBar />
          <Typography variant="h3" component="h3" className="title">
            {product?.title}
          </Typography>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: product?.content || "<p></p>" }}
          />

          <Box className="time">
            <AccessTimeIcon />
            <Box className="timeItems">
              <Box className="time-info">
                <Typography className="time-title">PREP</Typography>
                <Typography>{product?.time.prep}</Typography>
              </Box>
              <Box className="right">
                <Box className="time-info">
                  <Typography className="time-title">Bake</Typography>
                  <Typography>{product?.time.bake}</Typography>
                </Box>
                <Box className="time-info">
                  <Typography className="time-title">Total</Typography>
                  <Typography>{product?.time.total}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider className="divider" />
          <Box className="yield">
            <SettingsInputSvideoOutlinedIcon />
            <Box className="yieldItems">
              <Box className="time-info">
                <Typography className="time-title">YIELD</Typography>
                <Typography>{product?.yield}</Typography>
              </Box>
              <Box className="box-actions">
                <Button
                  variant="outlined"
                  startIcon={<> + </>}
                  className="save-button"
                >
                  Save Recipe
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LocalPrintshopOutlinedIcon />}
                  className="print-button"
                >
                  Print
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="image-container">
            <Image
              width={100}
              height={100}
              src={product?.image || "/"}
              alt="product"
              className="product-image"
            />
          </div>
        </Grid>
      </Grid>
    </Page>
  );
};

export default QickBread;


export const Page = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  margin: "2rem 18rem",
  "& .MuiPaper-elevation": {
    padding: "0.375rem 0",
  },

  [theme.breakpoints.down("md")]: {
    margin: "2rem 2rem",
  },
  background: theme.palette.common.white,
  "& .title": {
    color: theme.palette.text.primary,
    marginTop: 20,
    marginBottom: 30,
  },
  "& .content": {
    fontSize: "1rem",
    color: theme.palette.text.secondary,
    lineHeight: "25px",
    "& a, p": {
      color: theme.palette.text.secondary,
    },
  },
  "& .time, .yield": {
    display: "flex",
    gap: 15,

    alignItems: "center",
    marginTop: "50px",
    "& .timeItems, .yieldItems": {
      display: "flex",
      justifyContent: "space-between",
      gap: 35,
      alignItems: "center",
    },
    "& .right": {
      display: "flex",
      gap: 10,
    },
    "& .MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "30px",
    },
    "& .time-title": {
      textTransform: "uppercase",
      fontSize: "12px",
    },
    "& .MuiSvgIcon-root": {
      width: 30,
      height: 30,
    },
  },

  "& .divider": {
    marginTop: "10px",
  },
  "& .yield": {
    marginTop: "10px",
  },
  "& .box-actions": {
    display: "flex",
    gap: 5,
  },
  "& .save-button, .print-button": {
    height: "30px",
    borderColor: theme.palette.customColors.trackBg,
    color: theme.palette.text.primary,
    fontWeight: "bold",
    fontSize: "12px",
    textTransform: "capitalize",
    "& .MuiSvgIcon-root": {
      widht: 20,
      height: 20,
    },
    borderRadius: 0,
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