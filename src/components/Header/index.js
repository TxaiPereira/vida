import React, { useState, useEffect } from "react";
import {
  HeaderWrapper,
  Nav,
  MenuList,
  MenuItem,
  MenuLink,
  Logo,
} from "./styles";

function Header() {
  const menuItems = [
    { text: "Over mij", link: "/over_mij" },
    { text: "Workshops", link: "/workshops" },
  ];

  return (
    <HeaderWrapper>
      <a href="/">
        <Logo />
      </a>
      <Nav>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem>
              <MenuLink href={item.link}>{item.text}</MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </Nav>
    </HeaderWrapper>
  );
}
export default Header;
