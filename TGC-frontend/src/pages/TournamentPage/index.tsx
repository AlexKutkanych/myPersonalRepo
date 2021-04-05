import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../../styles/mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import TabsSwitcher from '../../components/TabsSwitcher';
import TournamentTable from '../../components/TournamentTable';
import { device } from '../../styles/constants';
import AuthHeader from '../../components/AuthHeader';
import { getTournaments } from '../../services/getTournaments';
import { getAuthToken } from '../../utils/helpers';
import { tableHead, URL } from '../../utils/constants';

const StyledPaymentPage = styled.div`
  min-height: 1460px;
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

const TournamentPage: React.FC = () => {
    const [allTournaments, setAllTournaments] = useState([]);
    const [myTournaments, setMyTournaments] = useState([]);

    useEffect(() => {
        const token = getAuthToken();
        getTournaments(URL.GET_ALL_TOURNAMENTS, token)
            .then(({ data: { body: { tournaments } } }) => {
                setAllTournaments(tournaments);
            })
            .catch(err => console.log(err));

        getTournaments(URL.GET_MY_TOURNAMENTS, token)
            .then(({ data: { body: { userTournaments } } }) => {
                const myTournamentsData = userTournaments.map(({ tournament }: any) => tournament);
                setMyTournaments(myTournamentsData);
                console.log(test);
            })
            .catch(err => console.log(err));

    }, []);

  return (
    <StyledPaymentPage>
      <PaymentPageWrapper removeMobilePaddings={true}>
          <AuthHeader />
          <TabsSwitcher titles={['All Tournaments', 'My Tournaments']}>
              <TournamentTable data={allTournaments} tableHead={tableHead}
                               styledHeader hasFooter footerButton='See my current tournaments' />
              <TournamentTable data={myTournaments} tableHead={tableHead}
                               styledHeader hasFooter footerButton='Check out all tournaments' />
          </TabsSwitcher>
      </PaymentPageWrapper>
    </StyledPaymentPage>
  );
}

export default TournamentPage;
