import styled from "styled-components";

import { bodyBackgroundColor, textColor } from "./colors";
import NetherlandsFlag from "./assets/NL_flag.svg";
import BrazilFlag from "./assets/BR_flag.svg";

export const Body = styled.body`
  background-color: ${bodyBackgroundColor};
  width: 100%;
  height: 100%;
  color: ${textColor};
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
  }
`;

export const LanguageWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

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
