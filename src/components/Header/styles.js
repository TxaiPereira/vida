import styled from "styled-components";

import { headerColor, linkColor, linkHoverColor } from "../../colors";
import LogoImg from "./assets/logo.svg";
import LogoSmallImg from "./assets/logoSmall.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: ${headerColor};
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

export const Nav = styled.nav``;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
`;

export const MenuItem = styled.li`
  text-align: center;
  height: 100%;
  padding: 0 10px;
  font-weight: 700;
`;

export const MenuLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${linkColor};
  :hover {
    color: ${linkHoverColor};
  }
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: left;
  height: 100%;
  width: 200px;
  margin-left: 20px;

  @media only screen and (max-width: 510px) {
    background-image: url(${LogoSmallImg});
    background-position: left;
    margin-left: 10px;
    width: 80px;
  }
`;
