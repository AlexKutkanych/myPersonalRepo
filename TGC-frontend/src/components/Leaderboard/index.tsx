import * as React from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../../styles/mixins';
import { ILeaderboardTableRow } from './types';
import { mockedTableData, userTableData } from './mockedData';
import LeaderboardItem from '../LeaderboardItem';

const StyledLeaderboard = styled.div`
  width: 100%;
  margin-bottom: 167px;
`;

const MainBannerWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const LeaderboardTable = styled.div`
  width: 100%;
  max-width: 942px;
  margin: 23px auto 0;
`;

const LeaderboardTableHead = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7f7f7f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  padding: 10px 18px 5px;
`;

const LeaderboardTableBody = styled.div``;
const LeaderboardTableTopTitle = styled.div`
  padding: 18px 0;
  text-align: center;
  font-size: 24px;
  line-height: 29px;
  color: #848484;
  text-transform: uppercase;
  background: #181818;
  border-top: 1px solid #383838;
`;

const TournamentTableHeadItem = styled.div`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  &:first-child {
    flex-basis: 6%;
  }

  &:nth-child(2) {
    flex-basis: 33%;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    flex-basis: 17%;
  }

  &:last-child {
    flex-basis: 10%;
  }
`;

const Leaderboard: React.FC = () => {
  const { tableHead, tableBody } = mockedTableData;
  return (
    <StyledLeaderboard>
      <MainBannerWrapper>
        <LeaderboardTable>
          <LeaderboardTableHead>
            {tableHead.map((item, i) => <TournamentTableHeadItem key={i}>{item}</TournamentTableHeadItem>)}
          </LeaderboardTableHead>
          <LeaderboardTableBody>
            <LeaderboardItem {...userTableData} background='#8B1921'/>
            <LeaderboardTableTopTitle>top 15</LeaderboardTableTopTitle>
            {tableBody.map((teamData: ILeaderboardTableRow, i) => <LeaderboardItem key={i} {...teamData} />)}
          </LeaderboardTableBody>
        </LeaderboardTable>
      </MainBannerWrapper>
    </StyledLeaderboard>
  );
}

export default Leaderboard;
