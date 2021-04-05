import * as React from 'react';
import styled from 'styled-components';
import { LayoutWrapper, HeadingH2 } from '../../styles/mixins';
import TotalPayment from '../TotalPayment';
import WinnerCard from '../WinnerCard';
import { mockedWinners } from './mockedData';
import { IPlace } from '../WinnerCard/types';
import { device } from '../../styles/constants';

const StyledRecentWinners = styled.div`
  padding: 0 0 100px;
  background-color: #000;
`;

const RecentWinnersWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const RecentWinnersPayment = styled.div`
  padding-bottom: 50px;
  
  @media ${device.tablet} {
    padding-bottom: 0;
    transform: translateY(-70px);
  }
`;

const WinnersBlock = styled.div``;

const WinnersTitle = styled(HeadingH2)`
  margin-bottom: 31px;
  font-size: 12px;
  line-height: 14px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const WinnersList = styled.div`
  display: flex;

  & > div:not(:last-child) {
    margin-right: 10px;

    @media ${device.tablet} {
      margin-right: 24px;
    }
  }
`;

const RecentWinners: React.FC = () => {
  return (
    <StyledRecentWinners>
      <RecentWinnersWrapper>
        <RecentWinnersPayment>
            <TotalPayment title="TGC has paid our to gamers" sum="$ 57,127" />
        </RecentWinnersPayment>
        <WinnersBlock>
          <WinnersTitle>Recent Winners</WinnersTitle>
          <WinnersList>
            {mockedWinners.map(({ id, place, winners }: IPlace) => <WinnerCard key={id} place={place} winners={winners} />)}
          </WinnersList>
        </WinnersBlock>
      </RecentWinnersWrapper>
    </StyledRecentWinners>
  );
}

export default RecentWinners;
