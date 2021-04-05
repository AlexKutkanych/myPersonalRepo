import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';
import {
  CtaButton, LayoutWrapper, ShowOnMobile, ShowOnDesktop, PageHeader, PageHeaderBgImage, ButtonWrapper
} from '../../styles/mixins';
import { LoginRegistrationPageLinks } from '../../styles/login-registration-mixins';
import city from '../../images/city.png';
import playerBackground from '../../images/player-bg.png';
import tgcClub from '../../images/tgc-club.png';
import { device } from '../../styles/constants';

const StyledRegistrationPage = styled.div`
  min-height: 800px;
  background-color: #000;
  background: url(${city}) bottom, url(${playerBackground});
  background-size: contain, cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    min-height: 1100px;
  }
`;

const RegistrationPageWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const LoginPage: React.FC = () => {
  return (
    <StyledRegistrationPage>
      <RegistrationPageWrapper removeMobilePaddings={true}>
        <ButtonWrapper>
          <ShowOnMobile><Link to='/registration'><CtaButton>Join</CtaButton></Link></ShowOnMobile>
          <ShowOnDesktop><Link to='/registration'><CtaButton>Join TGC Club</CtaButton></Link></ShowOnDesktop>
        </ButtonWrapper>
        <PageHeaderBgImage src={tgcClub} alt='tgc club background' />
        <PageHeader>Log In</PageHeader>
        <LoginRegistrationPageLinks>Need an account? <Link to='/registration'>Sign up now</Link></LoginRegistrationPageLinks>
        <LoginForm />
      </RegistrationPageWrapper>
    </StyledRegistrationPage>
  );
}

export default LoginPage;
