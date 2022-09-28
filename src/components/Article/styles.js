import styled from "styled-components";

import {
  articleBackgroundColor1,
  articleBackgroundColor2,
  h1Color1,
  h1Color2,
} from "../../colors";

import testImg1 from "./assets/test1.jpg";
import testImg2 from "./assets/test2.jpg";

export const ArticleWrapper = styled.article`
  padding: 20px 0;
  margin-top: 30px;

  background-image: url(${(props) =>
    props.background === 1 ? testImg1 : testImg2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const ArticleText = styled.div`
  width: 640px;
  margin: auto;
  background-color: white;
  padding: 20px;

  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;

export const H1 = styled.h1`
  font-size: 1.5em;
  color: ${(props) => (props.headingColor === 1 ? h1Color1 : h1Color2)};
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
