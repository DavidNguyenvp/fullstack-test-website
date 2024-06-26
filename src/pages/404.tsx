import { Box, Button, Link } from "@mui/material";
import React from "react";

const Error404 = () => {
  return (
    <Box>
      <h1>404 - Page Not Found</h1>
      <Button href="/" component={Link} variant="contained" sx={{ px: 5.5 }}>
        Back to Home
      </Button>
    </Box>
  );
};

export default Error404;
