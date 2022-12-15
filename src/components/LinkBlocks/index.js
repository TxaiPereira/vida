import React from "react";
import {
  LinkSection,
  LinkBlocksWrapper,
  LinkBlockWrapper,
  LinkButton,
  Heading,
  LinkText,
} from "./styles";

function LinkBlocks({ data, background, readMore }) {
  const textMaxLength = 209;
  const shortenText = (string) => {
    return string.length > textMaxLength
      ? string.substring(0, textMaxLength) + "..."
      : string;
  };

  return (
    <LinkSection>
      <LinkBlocksWrapper background={background}>
        {data.map((dataItem, index) => (
          <LinkBlockWrapper key={index}>
            <Heading>{dataItem.header}</Heading>
            <LinkText>{shortenText(dataItem.text[0])}</LinkText>
            <LinkButton href={dataItem.link}>{readMore}</LinkButton>
          </LinkBlockWrapper>
        ))}
      </LinkBlocksWrapper>
    </LinkSection>
  );
}
export default LinkBlocks;
