import styled from "styled-components";

import { bodyBackgroundColor, textColor } from "./colors";

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
