import { Box, Button, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled("img")({
  padding: "15px",
});

const StyledButton = styled(Button)`
  //   width: 48%;
  width: 44%;
  height: 50px;
  border-radius: 2px;
`;

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #bfbfc0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="product-image" />
      </Box>

      <StyledButton
        variant="contained"
        style={{ marginRight: "10px", background: "#ff9f00" }}
      >
        <ShoppingCartIcon />
        Add to cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        <FlashOnIcon />
        Buy now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
