import styled from "styled-components";

import {
  slideShowBackgroundColor,
  articleBackgroundColor,
  h1Color1,
  h1Color2,
} from "../../colors";

import testImg1 from "./assets/test1.png";
import workshopImage from "./assets/workshop.jpg";
import bloemschikkenImage from "./assets/bloemschikken.jpg";

import addressIcon from "./assets/address.png";
import emailIcon from "./assets/email.png";
import whatsappIcon from "./assets/whatsapp.png";
import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";

export const ArticleWrapper = styled.article`
  margin-top: 30px;
  background-color: #fcfbf4;
  width: 100%;
`;

export const SlideshowWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  background-color: ${slideShowBackgroundColor};
  padding-top: 10px;
  padding-bottom: 5px;
`;

export const SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

export const Slide = styled.div`
  display: inline-block;
  height: 400px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ArticleImage = styled.img`
  content: url(${(props) =>
    props.image === 1
      ? workshopImage
      : props.image === 2
      ? bloemschikkenImage
      : testImg1});
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const ArticleText = styled.div`
  width: 640px;
  margin: auto;
  background-color: ${articleBackgroundColor};
  padding: 20px;

  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;

export const H1 = styled.h1`
  font-size: 1.5em;
  color: ${(props) => (props.headingColor === 1 ? h1Color1 : h1Color2)};
  text-align: center;
  text-transform: uppercase;
`;

export const P = styled.p`
  font-size: 1em;
  margin-top: 10px;
  line-height: 22px;
  text-align: justify;
`;

export const List = styled.ul`
  text-align: left;
  list-style: none;
`;

export const ListItem = styled.li`
  :before {
    content: "✓ ";
    color: ${h1Color2};
    font-weight: 700;
  }
`;

export const SocialMediaList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const SocialMediaItem = styled.li`
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const SocialMediaText = styled.p`
  margin-left: 5px;
`;

export const SocialMediaIcon = styled.div`
  background-image: url(${(props) =>
    props.icon === 0
      ? addressIcon
      : props.icon === 1
      ? whatsappIcon
      : props.icon === 2
      ? emailIcon
      : props.icon === 3
      ? facebookIcon
      : instagramIcon});
  background-size: cover;
  width: 30px;
  height: 30px;
`;
