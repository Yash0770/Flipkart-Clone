import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
`;

const CustomButtons = () => {
  return (
    <Wrapper>
      <Button
        variant="contained"
        className="navbar-btn"
        style={{
          color: "#2874f0",
          background: "#ffffff",
          textTransform: "none",
          padding: "5px 40px",
          borderRadius: "2px",
          boxShadow: "none",
          fontWeight: "600",
          height: "32px",
        }}
      >
        Login
      </Button>
      <Typography
        className="navbar-btn"
        style={{ marginTop: "3px", width: "135px" }}
      >
        Become a Seller
      </Typography>
      <Typography className="navbar-btn" style={{ marginTop: "3px" }}>
        More
      </Typography>
      <Box className="navbar-btn d-flex">
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Box>
    </Wrapper>
  );
};

export default CustomButtons;
