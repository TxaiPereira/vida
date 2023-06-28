import React, { useState } from "react";
import {
  HeaderWrapper,
  Nav,
  HamburgerMenu,
  MenuList,
  MenuItem,
  MenuLink,
  Logo,
} from "./styles";

function Header({ data }) {
  const menuItems = [
    { text: data.aboutMeLinkText, link: "/over_mij" },
    { text: data.coachingLinkText, link: "/coaching" },
    { text: data.workshopsLinkText, link: "/workshops" },
    { text: data.contactLinkText, link: "/contact" },
  ];

  const [hamburger, setHamburger] = useState(false);

  return (
    <HeaderWrapper>
      <a href="/">
        <Logo />
      </a>
      <Nav>
        <HamburgerMenu onClick={() => setHamburger(!hamburger)} />
        <MenuList hamburger={hamburger}>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <MenuLink href={item.link}>{item.text}</MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </Nav>
    </HeaderWrapper>
  );
}
export default Header;
