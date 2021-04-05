import React from 'react';
import styled from 'styled-components';
import { PageHeader, LayoutWrapper, Paragraph, PageHeaderBgImage, MenuList, MenuItem } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import registration from '../../images/registration.png';
import TotalPayment from '../../components/TotalPayment';
import CheckoutPayment from '../../components/CheckoutPayment';
import { device } from '../../styles/constants';
import AuthHeader from '../../components/AuthHeader';

const StyledPaymentPage = styled.div`
  min-height: 850px;
  background-color: #000;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    min-height: 1360px;
  }
`;

const PaymentPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const PaymentPageInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media ${device.tablet} {
    max-width: 675px;
  }
  
  img {
    top: 55px;

    @media ${device.tablet} {
      top: 65px;
    }
  }
`;

const PaymentPageTextWrapper = styled.div`
  margin: 0 auto 45px;
  z-index: 1;

  @media ${device.tablet} {
    margin-bottom: 15px;
  }
`;

const PaymentPageText = styled(Paragraph)`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 700;
  margin: 0;
  z-index: 1;
  text-align: center;
`;

const PaymentPage: React.FC = () => {
  return (
    <StyledPaymentPage>
      <PaymentPageWrapper removeMobilePaddings={true}>
        <AuthHeader />
        <MenuList>
          <MenuItem>All Tournaments</MenuItem>
          <MenuItem>My Touraments</MenuItem>
        </MenuList>
        <PaymentPageInnerWrapper>
          <PageHeaderBgImage src={registration} alt='tgc club background' />
          <PageHeader>Duos #21Y2</PageHeader>
          <PaymentPageTextWrapper>
            <PaymentPageText>Feb 15, 2021 @ 6pm PT</PaymentPageText>
            <PaymentPageText>20 teams per division</PaymentPageText>
          </PaymentPageTextWrapper>
          <TotalPayment title='$25/Person Entry Fee' sum='$ 1,600' sumFirst={false} isBig={false} />
          <CheckoutPayment />
        </PaymentPageInnerWrapper>
      </PaymentPageWrapper>
    </StyledPaymentPage>
  );
}

export default PaymentPage;
