import * as React from 'react';
import styled from 'styled-components';
import { IPlace, IWinner } from './types';
import { device } from '../../styles/constants';

interface IWinnerCardWrapper { multipleWinners: number }

const WinnerCardWrapper = styled.div<IWinnerCardWrapper>`
  min-width: 82px;
  background: #1A1717;
  border: 1px solid #515151;
  border-radius: 8px;
  padding: ${({ multipleWinners }) => multipleWinners ? '7px 8px 9px' : '24px 20px 30px'};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    min-width: 170px;
    padding: ${({ multipleWinners }) => multipleWinners ? '24px 27px 30px' : '24px 20px 30px'};
  }

  @media ${device.laptop} {
    min-width: 196px;
    padding: ${({ multipleWinners }) => multipleWinners ? '24px 40px 30px' : '24px 20px 30px'};
  }
`;

const WinnerCardImage = styled.img`
  width: 25px;
  margin: 10px auto 6px;

  @media ${device.tablet} {
    width: 60px;
    margin: 23px auto 12px;
  }
`;

const WinnerCardSeparator = styled.span`
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.24) 50.52%, rgba(255, 255, 255, 0) 100%);
`;

const WinnerCardWinners = styled.div`
  display: flex;
`;

const WinnerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: 20px;
    
    @media ${device.tablet} {
      margin-right: 45px;
    }
  }
`;

const WinnerCardTitle = styled.p<{ winners: number }>`
  margin: 0 auto 4px;
  font-size: 12px;
  line-height: 14px;
  color: ${({ winners }) => winners > 1 ? '#DBC349' : '#F0404C'};

  @media ${device.tablet} {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const WinnerCardName = styled.h2`
  margin: 0 auto;
  font-size: 10px;
  line-height: 12px;
  color: #fff;
  font-weight: normal;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const WinnerCard = ({ place, winners }: IPlace) => {
  return (
    <WinnerCardWrapper multipleWinners={winners.length}>
      <WinnerCardTitle winners={winners.length}>{place}</WinnerCardTitle>
      <WinnerCardSeparator />
      <WinnerCardWinners>
        {winners.map(({ id, name, countryLogo }: IWinner) => {
          return (
            <WinnerItem key={id}>
              <WinnerCardImage src={countryLogo} alt='warzone logo' />
              <WinnerCardName>{name}</WinnerCardName>
            </WinnerItem>
          )
        })}
      </WinnerCardWinners>
    </WinnerCardWrapper>
  );
}

export default WinnerCard;
