import React from "react";
import {
  HeaderWrapper,
  Nav,
  MenuList,
  MenuItem,
  MenuLink,
  Logo,
} from "./styles";

function Header({ data }) {
  const menuItems = [
    { text: data.aboutMeLinkText, link: "/over_mij" },
    { text: data.coachingLinkText, link: "/" },
    { text: data.workshopsLinkText, link: "/workshops" },
  ];

  return (
    <HeaderWrapper>
      <a href="/">
        <Logo />
      </a>
      <Nav>
        <MenuList>
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
