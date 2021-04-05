import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/mixins';
import cupIcon from '../../images/cup-icon.svg';
import { ITotalPayment } from './types';
import { device } from '../../styles/constants';

interface IProp {
  isBig?: boolean;
}

const TotalPaymentWrapper = styled.div<IProp>`
  width: ${({ isBig }) => isBig ? '281px' : '196px'};
  max-height: ${({ isBig }) => isBig ? '71px' : '87px'};
  background-color: #B2212B;
  border-radius: ${({ isBig }) => isBig ? '40px' : '20px'};
  display: flex;
  align-items: center;
  padding: 3px 18px;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: ${({ isBig }) => isBig ? '697px' : '284px'};
    max-height: ${({ isBig }) => isBig ? '174px' : '87px'};
    padding: 35px;
  }
`;

const TotalPaymentImage = styled.img<IProp>`
  width: ${({ isBig }) => isBig ? '101px' : '48px'};
  margin: 0 5px 0 -10px;
  margin-right: ${({ isBig }) => isBig ? '10px' : '5px'};

  @media ${device.tablet} {
    width: ${({ isBig }) => isBig ? '251px' : '64px'};
    margin-right: ${({ isBig }) => isBig ? '74px' : '23px'};
  }
`;

const TotalPaymentText = styled.div<{ sumFirst: boolean }>`
  display: flex;
  flex-direction: ${({ sumFirst }) => sumFirst ? 'column': 'column-reverse'};
  color: #fff;
  text-align: center;
`;

const TotalPaymentTitle = styled(Paragraph)<IProp>`
  font-size: ${({ isBig }) => isBig ? '10px' : '12px'};
  line-height: ${({ isBig }) => isBig ? '12px' : '15px'};
  margin: 0;

  @media ${device.tablet} {
    font-size: ${({ isBig }) => isBig ? '14px' : '12px'};
    line-height: ${({ isBig }) => isBig ? '17px' : '15px'};
  }
`;

const TotalPaymentSum = styled.p<IProp>`
  font-size: ${({ isBig }) => isBig ? '30px' : '32px'};
  line-height: ${({ isBig }) => isBig ? '37px' : '50px'};
  font-family: 'Lalezar', cursive;
  margin: 0;
  white-space: nowrap;

  @media ${device.tablet} {
    font-size: ${({ isBig }) => isBig ? '70px' : '44px'};
    line-height: ${({ isBig }) => isBig ? '90px' : '50px'};
  }
`;

const TotalPayment = ({ title, sum, sumFirst = true, isBig = true }: ITotalPayment) => {
  return (
    <TotalPaymentWrapper isBig={isBig}>
      <TotalPaymentImage src={cupIcon} alt="warzone logo" isBig={isBig} />
      <TotalPaymentText sumFirst={sumFirst}>
          {title && <TotalPaymentTitle isBig={isBig}>{title}</TotalPaymentTitle>}
        <TotalPaymentSum isBig={isBig}>{sum}</TotalPaymentSum>
      </TotalPaymentText>
    </TotalPaymentWrapper>
  );
}

export default TotalPayment;
