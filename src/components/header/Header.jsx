import React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const BoxComponent = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Header = () => {
  // const logoUrl = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <BoxComponent to="/">
          <img src={logoUrl} alt="flipkart-logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <img
              src={subUrl}
              alt="sub-logo"
              style={{ width: "10px", height: "10px", marginLeft: "4px" }}
            />
          </Box>
        </BoxComponent>
        <Search />
        <Box style={{ margin: "0 5% 0 auto" }}>
          <CustomButtons />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
