import React, { useState, useEffect } from "react";
import {
  ArticleWrapper,
  ArticleText,
  H1,
  P,
  List,
  ListItem,
  ArticleImage,
} from "./styles";
import Quote from "../../components/Quote";

function Article({ data, background, headingColor, image }) {
  return (
    <ArticleWrapper background={background}>
      <ArticleText>
        <H1 headingColor={headingColor}>{data.header}</H1>
        <P>{data.text[0]}</P>

        {data.text[1] !== null && <P>{data.text[1]}</P>}
        {data.text[2] !== null && <P>{data.text[2]}</P>}
        {data.text[3] !== null && <P>{data.text[3]}</P>}
        {data.text[4] !== null && <P>{data.text[4]}</P>}
        {data.text[5] !== null && <P>{data.text[5]}</P>}

        {data.hasQuotes && (
          <Quote quote={data.quotes[0].quote} source={data.quotes[0].source} />
        )}

        <ArticleImage image={image} />

        {data.hasList && (
          <div>
            <P>{data.lists[0].text}</P>
            <List>
              {data.lists[0].items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </div>
        )}

        {data.hasList && data.lists.length > 1 && (
          <div>
            <P>{data.lists[1].text[0]}</P>
            <List>
              {data.lists[1].items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
            <P>{data.lists[1].text[1]}</P>
            <P>{data.lists[1].text[2]}</P>
          </div>
        )}

        {data.hasList && data.lists.length > 2 && (
          <div>
            <P>{data.lists[2].text[0]}</P>
            <List>
              {data.lists[2].items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
            <P>{data.lists[2].text[1]}</P>
            <P>{data.lists[2].text[2]}</P>
          </div>
        )}
      </ArticleText>
    </ArticleWrapper>
  );
}
export default Article;
