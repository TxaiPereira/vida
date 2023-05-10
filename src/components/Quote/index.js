import React, { useState, useEffect } from "react";
import { BlockQuote, QuoteText, QuoteSource } from "./styles";

function Quote({ quote, source }) {
  return (
    <BlockQuote>
      <QuoteText>{quote}</QuoteText>
      <QuoteSource>{source}</QuoteSource>
    </BlockQuote>
  );
}
export default Quote;
