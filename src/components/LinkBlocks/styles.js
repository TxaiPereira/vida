import styled from "styled-components";

import {
  linkBlockBackgroundColor,
  buttonBackgroundColor,
  buttonTextColor,
  buttonBackgroundColorHover,
  buttonTextColorHover,
  h1Color2,
  articleBackgroundColor1,
  articleBackgroundColor2,
} from "../../colors";

import testImg1 from "../Article/assets/test1.png";
import testImg2 from "../Article/assets/test2.jpg";

export const LinkSection = styled.section`
  padding: 20px 0;

  background-image: url(${(props) =>
    props.background === 1 ? testImg1 : testImg2});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const LinkBlocksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style-type: none;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LinkBlockWrapper = styled.li`
  background-color: ${linkBlockBackgroundColor};
  width: 300px;
  height: 230px;
  padding: 20px;
  margin: 0 auto;

  z-index: 1;
  position: relative;

  @media only screen and (max-width: 992px) {
    margin: 20px auto 0;
  }
`;

export const LinkText = styled.p`
  font-size: 1em;
  line-height: 22px;
  text-align: justify;

  margin: 20px 0;
`;

export const LinkButton = styled.a`
  display: block;
  background-color: ${buttonBackgroundColor};
  color: ${buttonTextColor};
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
  text-align: center;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 20px;

  :hover {
    background-color: ${buttonBackgroundColorHover};
    color: ${buttonTextColorHover};
  }
`;

export const Heading = styled.h2`
  font-size: 1.2em;
  color: ${h1Color2};
  text-align: center;
  text-transform: uppercase;
`;
