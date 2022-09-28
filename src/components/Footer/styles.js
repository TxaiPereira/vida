import styled from "styled-components";

import { footerBackgroundColor } from "../../colors";

export const FooterWrapper = styled.footer`
  padding: 20px;
  display: flex;
  background-color: ${footerBackgroundColor};
  margin-top: 30px;
  justify-content: center;
`;

export const InfoBlocks = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const InfoBlock = styled.li`
  margin: 0 10px;
  font-size: 1em;
  line-height: 22px;
  text-align: left;
`;

export const InfoHeader = styled.h1`
  font-size: 1.1em;
`;

export const InfoText = styled.p``;
