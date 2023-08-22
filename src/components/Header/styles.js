import styled from "styled-components";

import { headerColor, linkColor, linkHoverColor } from "../../colors";
import LogoNL from "./assets/logoNL.svg";
import LogoPT from "./assets/logoPT.svg";
import hamburgerOn from "./assets/hamburger_on.png";
import hamburgerOff from "./assets/hamburger_off.png";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: ${headerColor};
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Nav = styled.nav``;

export const HamburgerMenu = styled.button`
  display: none;
  @media only screen and (max-width: 728px) {
    display: block;
    width: 90px;
    height: 90px;
    border: none;
    right: 0;
    position: fixed;
    background-image: url(${hamburgerOff});
    background-size: cover;
    background-color: ${headerColor};
    :hover {
      background-image: url(${hamburgerOn});
    }
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  flex-direction: row;

  @media only screen and (max-width: 728px) {
    display: ${(props) => (props.hamburger === true ? "flex" : "none")};
    margin-top: 90px;
    flex-direction: column;
    background-color: ${headerColor};
  }
`;

export const MenuItem = styled.li`
  text-align: center;
  height: 100%;
  padding: 0 10px;
  font-weight: 700;
  @media only screen and (max-width: 728px) {
    width: 100%;
    margin-left: -10px;
  }
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
  @media only screen and (max-width: 728px) {
    height: 50px;
    background-color: ${headerColor};
    width: 130px;
    margin-right: -10px;
  }
`;

export const Logo = styled.div`
  background-image: url(${(props) => (props.lang === "NL" ? LogoNL : LogoPT)});
  background-repeat: no-repeat;
  background-position: left;
  height: 100%;
  width: 200px;
  margin-left: 20px;

  @media only screen and (max-width: 728px) {
    background-image: url(${(props) =>
      props.lang === "NL" ? LogoNL : LogoPT});
    background-position: left;
    margin-left: 10px;
  }
`;
