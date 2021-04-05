import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TotalPayment from '../../components/TotalPayment';
import { ButtonWithBorder, HeadingH1, HeadingH2, LayoutWrapper, Paragraph } from '../../styles/mixins';
import playerBackground from '../../images/player-bg.png';
import mainLogo from '../../images/main-logo.svg';

const StyledEmailTemplate = styled.div`
  min-height: 1100px;
  background-color: #000;
  background: url(${playerBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

const EmailTemplateWrapper = styled(LayoutWrapper)`
  flex-direction: column;
  padding: 300px 0;
  max-width: 900px;
`;

const EmailLogo = styled.img`
  width: 134px;
`;

const EmailTitle = styled(HeadingH2)`
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  margin: 63px 0 20px;
  font-weight: normal;
  font-family: 'San Francisco', Arial, sans-serif;
`;

const PaymentPageTextWrapper = styled.div`
  margin: 0 auto 15px;
`;

const PaymentPageTitle = styled(Paragraph)`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  z-index: 1;
  text-align: center;
`;

const PaymentPageText = styled(PaymentPageTitle)`
  opacity: 0.5;
  font-weight: 600;
  margin: 20px 0 60px;
`;

const EmailTemplate: React.FC = () => {
  return (
    <StyledEmailTemplate>
      <EmailTemplateWrapper>
        <EmailLogo src={mainLogo} alt="logo" />
        <EmailTitle>Francis invited you to join a Warzone tournament!</EmailTitle>
        <PaymentPageTextWrapper>
          <PaymentPageTitle>Feb 1, 2021 @ 6pm PT</PaymentPageTitle>
          <PaymentPageTitle>20 teams per division</PaymentPageTitle>
        </PaymentPageTextWrapper>
        <TotalPayment title="$25/Person Entry Fee" sum="$ 1,600" sumFirst={false} isBig={false} />
        <PaymentPageText>
          There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction
          of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination. Nothing
          seemed to move until the moment she began to take her eyes off the tree. Then in the corner of her eye, she would see the movement again and begin the process of
          staring again. He took a sip of the drink. He wasn't sure whether he liked it or not, but at this moment it didn't matter. She had made it especially for him so he
          would have forced it down even if he had absolutely hated it. That's simply the way things worked. She made him a new-fangled drink each day and he took a sip of it
          and smiled, saying it was excellent.
        </PaymentPageText>
        <ButtonWithBorder>Accept Invitation</ButtonWithBorder>
      </EmailTemplateWrapper>
    </StyledEmailTemplate>
  );
}

export default EmailTemplate;
