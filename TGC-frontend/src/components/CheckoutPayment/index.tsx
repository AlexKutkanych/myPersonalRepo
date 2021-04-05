import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Paragraph, HeadingH2 } from '../../styles/mixins';
import payPalLogo from '../../images/paypal-logo.svg';
import applePayLogo from '../../images/apple-pay-logo.svg';
import visaLogo from '../../images/visa.svg';
import mastercardLogo from '../../images/mastercard.svg';
import amexLogo from '../../images/amex.svg';
import discoverLogo from '../../images/discover.svg';
import { device } from '../../styles/constants';
import PayPalButton from '../PaypalButton';
import { setPaypalProvide } from '../../services/paypalService';
import Spinner from '../Spinner';
import { getAuthToken } from '../../utils/helpers';
import { useAuth } from '../../hooks/useAuth';

const StyledCheckoutPayment = styled.div`
  width: 100%;
  margin-top: 72px;
  padding: 21px 0 45px;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 8px;

  @media ${device.tablet} {
    width: 675px;
    padding-bottom: 40px;
  }
`;

const CheckoutPaymentTitle = styled(HeadingH2)`
  text-align: center;
  margin: 0 0 17px;
  font-size: 20px;
  line-height: 24px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const CheckoutPaymentSum = styled.div`
  font-size: 30px;
  line-height: 36px;
  background-color: #B2212B;
  color: #fff;
  text-align: center;
  padding: 11px 0;
`;

const CheckoutPaymentButtonWrapper = styled.div`
  min-height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  & > div:not(:first-child) {
    z-index: 0;
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 1;
`;

const CheckoutPaymentButton = styled.button<{ paymentType: string }>`
  height: 41px;
  width: 132px;
  border-radius: 20px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ paymentType }) => paymentType === 'payPal' ? payPalLogo : applePayLogo});
  background-color: ${({ paymentType }) => paymentType === 'payPal' ? '#ffc439' :'#fff'};

  &:first-child {
    margin-right: 21px;
  }
  
  &:hover {
    cursor: pointer;
  }
`;

const PaymentLabel = styled(Paragraph)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  margin: 20px auto 25px;
  color: #fff;
  font-family: 'San Francisco', Arial, sans-serif;
  text-align: center;
`;

const CheckoutPaymentMethod = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 27px;

  img:not(:last-child) {
    margin-right: 10px;
  }
`;

interface ILocationState {
    tournamentId: number;
}

const CheckoutPayment: React.FC = () => {
    const [clientId, setClientId] = useState('');
    const [currency, setCurrency] = useState('');
    const [mode, setMode] = useState('');
    const [showSpinner, setShowSpinner] = useState(true);
    const [showPaypal, setShowPaypal] = useState(false);
    const location = useLocation<ILocationState>();
    const { tournamentId } = useAuth();

    useEffect( () => {
        const token = getAuthToken();
        setPaypalProvide(token)
            .then(function ({ data: { body: { paypal } } }) {
                const { clientId, currency, mode } = paypal;
                setClientId(clientId);
                setCurrency(currency);
                setMode(mode);
                setShowPaypal(true);
            })
            .catch((err) => console.log(err));
    }, []);

    const afterScriptLoad = (isLoaded: boolean) => setShowSpinner(!isLoaded);

  return (
    <StyledCheckoutPayment>
        <CheckoutPaymentTitle>CHECKOUT</CheckoutPaymentTitle>
        <CheckoutPaymentSum>$50</CheckoutPaymentSum>
        <PaymentLabel>Duos #21Y2: $25/person for 2 players</PaymentLabel>
        <CheckoutPaymentButtonWrapper>
            {showSpinner && <SpinnerWrapper><Spinner /></SpinnerWrapper>}
            <CheckoutPaymentButton paymentType='applePay'/>
            {showPaypal &&
                <PayPalButton tournamentId={tournamentId} clientId={clientId}
                              currencyCode={currency} mode={mode} callback={afterScriptLoad} />
            }
        </CheckoutPaymentButtonWrapper>
        <CheckoutPaymentMethod>
          <img src={mastercardLogo} alt='mastercard logo' />
          <img src={visaLogo} alt='visa logo' />
          <img src={discoverLogo} alt='discover logo' />
          <img src={amexLogo} alt='amex logo' />
        </CheckoutPaymentMethod>
    </StyledCheckoutPayment>
  );
}

export default CheckoutPayment;
