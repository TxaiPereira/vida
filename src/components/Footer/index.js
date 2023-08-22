import React from "react";
import {
  FooterWrapper,
  InfoBlocks,
  InfoBlock,
  InfoHeader,
  InfoText,
} from "./styles";

function Footer({ data }) {
  return (
    <FooterWrapper>
      <InfoBlocks>
        {/* <InfoBlock>
          <InfoHeader>{data.addressHeader}</InfoHeader>
          <InfoText>Vrouwlaan 85</InfoText>
          <InfoText>1337 GG Hemeldam</InfoText>
          <InfoText>Nederland</InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoHeader>{data.contactHeader}</InfoHeader>
          <InfoText>naam@gmail.com</InfoText>
          <InfoText>Tel: 777-7777777</InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoHeader>VIDA</InfoHeader>
          <InfoText>BTW nr: NL007777777Z77</InfoText>
          <InfoText>KVK nr: 77777777</InfoText>
        </InfoBlock> */}
      </InfoBlocks>
    </FooterWrapper>
  );
}
export default Footer;
