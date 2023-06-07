import React, { useState, useEffect } from "react";
import {
  ArticleWrapper,
  ArticleImage,
  ArticleText,
  H1,
  P,
  List,
  ListItem,
  SlideshowWrapper,
  SlideshowSlider,
  Slide,
  SocialMediaList,
  SocialMediaItem,
  SocialMediaText,
  SocialMediaIcon,
} from "./styles";
import Quote from "../../components/Quote";

import workshopImage from "./assets/workshop.jpg";
import bloemschikkenImage from "./assets/bloemschikken.jpg";
import bloemschikkenImage2 from "./assets/bloemschikken2.jpg";
import bloemschikkenImage3 from "./assets/bloemschikken3.jpg";

function Article({ data, headingColor, image }) {
  const images = [
    workshopImage,
    bloemschikkenImage,
    bloemschikkenImage2,
    bloemschikkenImage3,
  ];
  const delay = 2500;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  //Source: https://codepen.io/bnsddk/pen/dyXaNod

  return (
    <ArticleWrapper>
      {image === 0 && (
        <SlideshowWrapper>
          <SlideshowSlider
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((image, index) => (
              <Slide key={index} image={image}></Slide>
            ))}
          </SlideshowSlider>
        </SlideshowWrapper>
      )}

      {image !== 0 && <ArticleImage image={image} />}

      <ArticleText>
        <H1 headingColor={headingColor}>{data.header}</H1>
        {data.link !== "/contact" && (
          <div>
            <P>{data.text[0]}</P>

            {data.text[1] !== null && <P>{data.text[1]}</P>}
            {data.text[2] !== null && <P>{data.text[2]}</P>}
            {data.hasQuotes && (
              <Quote
                quote={data.quotes[0].quote}
                source={data.quotes[0].source}
              />
            )}
            {data.text[3] !== null && <P>{data.text[3]}</P>}
            {data.text[4] !== null && <P>{data.text[4]}</P>}
            {data.text[5] !== null && <P>{data.text[5]}</P>}

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
          </div>
        )}

        {data.link == "/contact" && (
          <SocialMediaList>
            <SocialMediaItem>
              <SocialMediaIcon icon={0} />{" "}
              <SocialMediaText>{data.text[0]}</SocialMediaText>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaIcon icon={1} />{" "}
              <SocialMediaText>{data.text[1]}</SocialMediaText>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaIcon icon={2} />{" "}
              <SocialMediaText>{data.text[2]}</SocialMediaText>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaIcon icon={3} />{" "}
              <SocialMediaText>{data.text[3]}</SocialMediaText>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaIcon icon={4} />{" "}
              <SocialMediaText>{data.text[4]}</SocialMediaText>
            </SocialMediaItem>
          </SocialMediaList>
        )}
      </ArticleText>
    </ArticleWrapper>
  );
}
export default Article;
