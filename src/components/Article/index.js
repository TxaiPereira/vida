import React, { useState, useEffect } from "react";
import { ArticleWrapper, ArticleText, H1, P, List, ListItem } from "./styles";
import Quote from "../../components/Quote";

function Article({ article, background, headingColor }) {
  return (
    <ArticleWrapper background={background}>
      <ArticleText>
        <H1 headingColor={headingColor}>{article.header}</H1>
        <P>{article.text[0]}</P>

        {article.hasQuotes && (
          <Quote
            quote={article.quotes[0].quote}
            source={article.quotes[0].source}
          />
        )}

        {article.text[1] !== null && <P>{article.text[1]}</P>}
        {article.text[2] !== null && <P>{article.text[2]}</P>}
        {article.text[3] !== null && <P>{article.text[3]}</P>}

        {article.hasList && (
          <div>
            <P>{article.lists[0].text}</P>
            <List>
              {article.lists[0].items.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </List>
          </div>
        )}

        {article.hasList && article.lists.length > 1 && (
          <div>
            <P>{article.lists[1].text[0]}</P>
            <List>
              {article.lists[1].items.map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </List>
            <P>{article.lists[1].text[1]}</P>
            <P>{article.lists[1].text[2]}</P>
          </div>
        )}
      </ArticleText>
    </ArticleWrapper>
  );
}
export default Article;
