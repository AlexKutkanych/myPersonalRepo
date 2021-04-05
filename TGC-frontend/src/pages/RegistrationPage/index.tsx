import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegistrationForm from '../../components/RegistrationForm';
import { CtaButton, LayoutWrapper, PageHeader, PageHeaderBgImage, ButtonWrapper } from '../../styles/mixins';
import { LoginRegistrationPageLinks } from '../../styles/login-registration-mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import tgcClub from '../../images/tgc-club.png';
import { device } from '../../styles/constants';

const StyledRegistrationPage = styled.div`
  min-height: 1285px;
  background-color: #000;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    min-height: 1625px;
  }
`;

const RegistrationPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const RegistrationPage: React.FC = () => {
  return (
    <StyledRegistrationPage>
      <RegistrationPageWrapper removeMobilePaddings={true}>
        <ButtonWrapper>
          <Link to='/login'><CtaButton>Sign In</CtaButton></Link>
        </ButtonWrapper>
        <PageHeaderBgImage src={tgcClub} alt='tgc club background' />
        <PageHeader>Join TGC Club</PageHeader>
        <LoginRegistrationPageLinks>Have an account? <Link to='/login'>Sign in now</Link></LoginRegistrationPageLinks>
        <RegistrationForm />
      </RegistrationPageWrapper>
    </StyledRegistrationPage>
  );
}

export default RegistrationPage;
