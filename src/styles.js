import styled from "styled-components";

import { bodyBackgroundColor, textColor } from "./colors";
import NetherlandsFlag from "./assets/NL_flag.svg";
import BrazilFlag from "./assets/BR_flag.svg";

export const Body = styled.main`
  background-color: ${bodyBackgroundColor};
  width: 100%;
  height: 100%;
  color: ${textColor};

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
  }
`;

export const LanguageList = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
`;

export const LanguageItem = styled.li``;

export const LanguageButton = styled.button`
  background-image: url(${(props) =>
    props.language === "NL" ? NetherlandsFlag : BrazilFlag});
  background-repeat: no-repeat;
  background-position: center;
  min-width: 71px;
  min-height: 50px;
  border: none;
  margin: 0 10px;
`;
