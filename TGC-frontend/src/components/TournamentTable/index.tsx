import * as React from 'react';
import styled from 'styled-components';
import { LayoutWrapper, HeadingH2 } from '../../styles/mixins';
import TournamentItem from '../TournamentItem';
import { ITournamentTable, ITournament } from './types';
import { device } from '../../styles/constants';

const StyledTournamentTable = styled.div`
  width: 100%;
  max-width: 942px;
  margin: 0 auto;
`;

const TournamentTableHead = styled.div<{ styledHeader: boolean }>`
  display: none;
  color: #7f7f7f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  padding: ${({ styledHeader }) => styledHeader ? '35px 27px 10px' : '10px 27px'};
  background-color: ${({ styledHeader }) => styledHeader ? '#2f2e2e' : 'tranparent'};
  border-top-left-radius: ${({ styledHeader }) => styledHeader ? '8px' : 0};
  border-top-right-radius: ${({ styledHeader }) => styledHeader ? '8px' : 0};

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

const TournamentTableBody = styled.div``;

const TournamentTableHeadItem = styled.div`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  &:first-child {
    flex-basis: 15%;
  }

  &:nth-child(2) {
    flex-basis: 35%;
  }

  &:nth-child(3) {
    flex-basis: 11%;
  }

  &:nth-child(4) {
    flex-basis: 12%;
  }

  &:last-child {
    flex-basis: 27%;
  }
`;

const TournamentTableFooter = styled.div`
  display: none;
  padding: 40px 0 59px;
  background-color: #2f2e2e;
  border-radius: 0 0  8px 8px;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TournamentTableFooterButton = styled.button`
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  padding: 10px 46px;
  background: #232323;
  border: none;
`;

const TournamentTableTitle = styled(HeadingH2)`
  margin-bottom: 23px;
`;

const MainBannerWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const TournamentTable = ({
    data, title, styledHeader = false, hasFooter = false, footerButton,
    tableHead
}: ITournamentTable) => {
  return (
      <MainBannerWrapper removeMobilePaddings={true}>
        {title && <TournamentTableTitle>{title}</TournamentTableTitle>}
        <StyledTournamentTable>
          <TournamentTableHead styledHeader={styledHeader}>
            {tableHead.map((item, i) => <TournamentTableHeadItem key={i}>{item}</TournamentTableHeadItem>)}
          </TournamentTableHead>
          <TournamentTableBody>
            {data.map((tournamentData: ITournament) => <TournamentItem key={tournamentData.id} {...tournamentData} />)}
          </TournamentTableBody>
          {hasFooter && (
              <TournamentTableFooter>
                {footerButton && <TournamentTableFooterButton>{footerButton}</TournamentTableFooterButton>}
              </TournamentTableFooter>)}
        </StyledTournamentTable>
      </MainBannerWrapper>
  );
}

export default TournamentTable;
