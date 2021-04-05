import * as React from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { CtaButton, Paragraph, ShowOnDesktop } from '../../styles/mixins';
import { ITournament } from '../TournamentTable/types';
import gameModeIcon from '../../images/game-mode.svg';
import { IStatus } from '../TournamentTable/types';
import australiaFlag from '../../images/australia-flag-square.svg';
import trophyFlag from '../../images/trophy-transparent.svg';
import rectangular from '../../images/rectangular.svg';
import { device } from '../../styles/constants';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const TournamentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 14px 14px 9px;
  background: #181818;
  border: 1px solid #383838;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 14px 27px;
    align-items: center;
  }
`;

const TournamentCell = styled.div`
  color: #817A84;
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
`;

const TournamentCellGameMode = styled(TournamentCell)`
  display: none;
  flex-basis: 15%;

  @media ${device.tablet} {
    display: block;
  }

  img {
    width: 70%;
    
    @media ${device.laptop} {
      max-width: 107px;
    }
  }
`;

const TournamentCellInfo = styled(TournamentCell)`
  flex-basis: 100%;

  @media ${device.tablet} {
    flex-basis: 35%;
  }
`;

const TournamentCellPrize = styled(TournamentCell)`
  display: none;
  
  @media ${device.tablet} {
    display: block;
    flex-basis: 11%;
  }
`;

const TournamentCellTeamSize = styled(TournamentCell)<{ teamSize: number | null }>`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-basis: 12%;
  }

  &::after {
    content: ${({ teamSize }) => teamSize ? `url(${rectangular})` : 'none'};
    display: inline-block;
    margin-left: 6px;
    height: 14px;
  }
`;

const TournamentCellStatus = styled(TournamentCell)`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    flex-basis: 27%;
  }
`;

const TournamentName = styled(Paragraph)`
  display: inline-block;
  color: #E9DBF0;
  font-weight: 800;
  margin: 0;
  font-family: 'San Francisco', Arial, sans-serif;

  @media ${device.tablet} {
    margin-bottom: 6px;
  }
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TournamentDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  font-family: 'San Francisco', Arial, sans-serif;
  color: #817A84;
  margin: 8px 29px 0 0;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const StatusBadgeWrapperStyled = styled.div`
  display: inline-block;

  @media ${device.tablet} {
    display: none;
  }
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 2px 6px;
  background: #343434;
  color: #E9DBF0;
  border-radius: 100px;
  font-weight: 800;
  font-size: 8px;
  line-height: 10px;
  text-transform: uppercase;
  font-family: 'San Francisco', Arial, sans-serif;
  margin-right: 7px;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

const StatusIndicator = styled.span<{status: boolean}>`
  display: inline-block;
  margin-right: 4px;
  width: 8px;
  height: 8px;
  background: ${({ status }) => status ? '#5A5A5A' : 'green'};
  border-radius: 50%;
`;

const TournamentTimelineButton = styled(CtaButton)<IStatus>`
  width: 164px;
  display: flex;
  justify-content: center;
  padding: 10px 11px;
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ status }) => status === 'closed' || status === 'completed' ? '#232323' :
          status === 'live' ? '#C18A23' : status === 'registered' ? '#BABABA' : '#8D1C1C'};
  color: ${({ status, showIcons }) => showIcons ? '#fff' : status === 'closed' || status === 'completed' ? '#656565' :
          status === 'registered' ? '#343434' : '#fff'};
  border-radius: 4px;
  margin: 14px 0 6px;

  @media ${device.tablet} {
    margin: 0;
  }

  &::before {
    content: ${({ showIcons }) => showIcons ? `url(${trophyFlag})` : 'none'};
    display: inline-block;
    margin-right: 6px;
    height: 14px;
  }

  &::after {
    content: ${({ showIcons }) => showIcons ? `url(${australiaFlag})` : 'none'};
    display: inline-block;
    margin-left: 6px;
    height: 14px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const TournamentTimeline = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  margin-left: 11px;
  font-family: 'San Francisco', Arial, sans-serif;
`;

const TournamentDetails = styled.div`
  display: flex;
  margin-top: 8px;
  
  div {
    display: flex;
    
    &:first-child {
      margin-right: 23px;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const getDays = (start: string, end: string) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const date1 = start ? new Date(start).getTime() : new Date().getTime();
    const date2 = new Date(end).getTime();
    return Math.round(Math.abs((date2 - date1) / oneDay));
}

const TournamentItem = ({
    amountCurrency,
    awardAmount,
    costPerTeam,
    createdAt,
    endAt,
    id,
    isCompleted,
    maxNumberOfTeams,
    name,
    startAt,
    updatedAt,
}: ITournament) => {
    const startsIn = getDays('', startAt);
    const { saveTournament } = useAuth();
    const saveTournamentId = () => {
      saveTournament(id);
    }
  return (
    <TournamentRow>
      <TournamentCellGameMode><img src={gameModeIcon} alt='game mode' /></TournamentCellGameMode>
      <TournamentCellInfo>
          <StatusBadgeWrapperStyled>
            <StatusBadgeWrapper tournamentStatus={isCompleted} label='open' />
          </StatusBadgeWrapperStyled>
        <TournamentName>{name}</TournamentName>
        <StatusWrapper>
            <ShowOnDesktop>
                <StatusBadgeWrapper tournamentStatus={isCompleted} label='open' />
            </ShowOnDesktop>
          <TournamentDate>{dateFormat(createdAt, 'mediumDate')}</TournamentDate>
          <TournamentDetails>
            <TournamentCellPrize>{amountCurrency === 'usd' ? '$' : '$'}{awardAmount}</TournamentCellPrize>
            <TournamentCellTeamSize teamSize={maxNumberOfTeams}>{maxNumberOfTeams || '-'}</TournamentCellTeamSize>
          </TournamentDetails>
        </StatusWrapper>
      </TournamentCellInfo>
      <TournamentCellPrize>{amountCurrency === 'usd' ? '$' : '$'} {awardAmount}</TournamentCellPrize>
      <TournamentCellTeamSize teamSize={maxNumberOfTeams}>{maxNumberOfTeams || '-'}</TournamentCellTeamSize>
      <TournamentCellStatus>
        <TournamentTimelineButton status='open' showIcons={false}>
            <Link to={{pathname: '/payment', state: { tournamentId: id }}} onClick={saveTournamentId}>Register</Link>
            </TournamentTimelineButton>
        <TournamentTimeline>Starts in {startsIn} days</TournamentTimeline>
      </TournamentCellStatus>
    </TournamentRow>
  );
}

export default TournamentItem;

interface IStatusBadgeWrapper {
    tournamentStatus: boolean;
    label: string;
}

const StatusBadgeWrapper = ({ tournamentStatus, label }: IStatusBadgeWrapper) => {
    return (
        <StatusBadge>
            <StatusIndicator status={tournamentStatus} />{tournamentStatus ? 'live' : label}
        </StatusBadge>
    )
}
