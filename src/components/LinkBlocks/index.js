import React, { useState, useEffect } from "react";
import {
  LinkBlocksWrapper,
  LinkBlockWrapper,
  LinkButton,
  Heading,
  LinkText,
} from "./styles";

function LinkBlocks({ articles, background }) {
  return (
    <LinkBlocksWrapper background={background}>
      {articles.map((article) => (
        <LinkBlockWrapper>
          <Heading>{article.header}</Heading>
          <LinkText>{article.text[0]}</LinkText>
          <LinkButton href={article.link}>Lees meer</LinkButton>
        </LinkBlockWrapper>
      ))}
    </LinkBlocksWrapper>
  );
}
export default LinkBlocks;
