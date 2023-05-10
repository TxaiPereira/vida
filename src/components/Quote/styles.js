import styled from "styled-components";

import { quoteBackgroundColor, quoteTextColor } from "../../colors";

export const BlockQuote = styled.blockquote`
  background-color: ${quoteBackgroundColor};
  color: ${quoteTextColor};
  width: 90%;
  padding: 20px;
  margin: 10px auto;
`;

export const QuoteText = styled.p`
  font-size: 1.5em;
  text-align: center;
`;

export const QuoteSource = styled.p`
  font-size: 1em;
  text-align: right;
`;
