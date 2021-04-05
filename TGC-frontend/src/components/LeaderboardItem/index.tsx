import * as React from 'react';
import styled from 'styled-components';
import { ILeaderboardTableRow } from "../Leaderboard/types";
import rectangular from '../../images/rectangular.svg';

interface IBackground {
    background?: string;
}

type IProps = ILeaderboardTableRow & IBackground;

const TournamentRow = styled.div<IBackground>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: ${({ background }) => background ? background : '#181818'};
  border-top: 1px solid #383838;
  
  &:last-child {
    border-bottom: 1px solid #383838;
  }
`;

const TournamentCell = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 17%;
  color: #e9dbf0;
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
`;

const TournamentCellPlace = styled(TournamentCell)`
  flex-basis: 6%;
`;

const TournamentCellPlacementPoints = styled(TournamentCell)<{points: number}>`
  &::after {
    content: ${({ points }) => !!points ? `url(${rectangular})` : 'none'};
    display: inline-block;
    margin-left: 6px;
    height: 14px;
  }
`;

const TournamentCellInfo = styled(TournamentCell)`
  flex-basis: 33%;
`;

const TournamentCellTotalPoints = styled(TournamentCell)`
  flex-basis: 10%;
`;

const LeaderboardCountryFlag = styled.img`
  width: 36px;
  margin-right: 14px;
`

const LeaderboardItem = ({
    name,
    place,
    countryLogo,
    gamesPlayed,
    totalKills,
    placementPoints,
    totalPoints,
    background
}: IProps) => {
  return (
    <TournamentRow background={background}>
      <TournamentCellPlace>{place}</TournamentCellPlace>
      <TournamentCellInfo>
        <LeaderboardCountryFlag src={countryLogo} alt="game mode" />{name}
      </TournamentCellInfo>
      <TournamentCell>{gamesPlayed}</TournamentCell>
      <TournamentCell>{totalKills}</TournamentCell>
      <TournamentCellPlacementPoints points={placementPoints}>{placementPoints}</TournamentCellPlacementPoints>
      <TournamentCellTotalPoints>{totalPoints}</TournamentCellTotalPoints>
    </TournamentRow>
  );
}

export default LeaderboardItem;
