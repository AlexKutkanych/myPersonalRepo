import * as React from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../../styles/mixins';
import mainLogo from '../../images/main-logo.svg';
import facebookLogo from '../../images/facebook-logo.svg';
import twitterLogo from '../../images/twitter-logo.svg';
import linkedinLogo from '../../images/linkedin-logo.svg';
import sslSecureLogo from '../../images/ssl-secure.svg';
import visaLogo from '../../images/visa-white.svg';
import mastercardLogo from '../../images/mastercard-white.svg';
import amexLogo from '../../images/amex-white.svg';
import trustedGoogleLogo from '../../images/trusted-google.svg';
import { device } from '../../styles/constants';

const StyledFeaturesBanner = styled.div`
  background: #202020;
`;

const FooterLayoutWrapper = styled(LayoutWrapper)`
  position: relative;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  padding: 40px 0 21px;

  @media ${device.tablet} {
    display: block;
    flex-basis: 60%;
  }
`;

const FooterBottomWrapper = styled(FooterWrapper)`
  padding: 24px 0;

  @media ${device.tablet} {
    padding-bottom: 40px;
  }
`;

const LogoLink = styled.a`
  display: inline-block;
  width: 112px;
  margin: 0 32px 16px 0;

  @media ${device.tablet} {
    margin-bottom: 0 0 22px;
  }
  
  img {
    width: 100%;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  margin-bottom: 16px;

  @media ${device.tablet} {
    margin-bottom: 0;  
  }
  
  img {
    width: 26px;
    margin-right: 13px;
  }
`;

const FooterNavWrapper = styled.div`
  display: flex;
  
  div:last-child {
    display: none;

    @media ${device.tablet} {
      display: block;
    }
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 14px;
  color: #ddd;
`;

const FooterNavMain = styled(FooterNav)`
  a {
    flex-basis: 50%;

    @media ${device.tablet} {
      flex-basis: 33%;
    }
  }
`;

const FooterNavAdditional = styled(FooterNav)`
  a {
    flex-basis: 50%;
  }
`;

const FooterNavPolicy = styled(FooterNav)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  a {
    margin-right: 10px; 
  }
`;

const FooterNavTitle = styled.p`
  color: #666;
  margin: 24px 0 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  text-transform: capitalize;
  font-family: 'San Francisco', Arial, sans-serif;
`;

const FooterNavLink = styled.a`
  margin: 10px 0 0;
  color: #aaa;
  text-decoration: none;
  font-family: 'San Francisco', Arial, sans-serif;
`;

const FooterSeparator = styled.span`
  width: 100%;
  display: block;
  height: 1px;
  background: #353535;
`;

const FooterPolicyText = styled(FooterNavTitle)`
  margin: 0 0 32px;
`;

const TrustedGoogleImage = styled.img`
  position: absolute;
  right: 20px;
  bottom: 24px;

  @media ${device.tablet} {
    right: 20%;
    top: 90px;
  }
`;

const FooterPayment = styled.div`
  margin-top: 14px;

  @media ${device.tablet} {
    margin-top: 25px;
  }

  img {
    width: 27px;
    margin-right: 7px;
  }

  img:first-child {
    width: 50px;
  }
`;

const Footer = () => {
  return (
    <StyledFeaturesBanner>
      <FooterLayoutWrapper>
          <FooterWrapper>
            <LogoLink href='/'><img src={mainLogo} alt='logo' /></LogoLink>
            <FooterSocials>
              <img src={facebookLogo} alt='facebook logo' />
              <img src={twitterLogo} alt='twitter logo' />
              <img src={linkedinLogo} alt='linkedin logo' />
            </FooterSocials>
            <FooterNavWrapper>
              <div>
                <FooterNavTitle>Resources</FooterNavTitle>
                <FooterNavMain>
                  <FooterNavLink href='/'>Support-A-Creator</FooterNavLink>
                  <FooterNavLink href='/'>Company</FooterNavLink>
                  <FooterNavLink href='/'>Store EULA</FooterNavLink>
                  <FooterNavLink href='/'>Publish on Epic Games</FooterNavLink>
                  <FooterNavLink href='/'>Fan Art Policy</FooterNavLink>
                  <FooterNavLink href='/'>Online Services</FooterNavLink>
                  <FooterNavLink href='/'>Careers</FooterNavLink>
                  <FooterNavLink href='/'>UX Research</FooterNavLink>
                  <FooterNavLink href='/'>Community Rules</FooterNavLink>
                </FooterNavMain>
              </div>
              <div>
                <FooterNavTitle>Made By Epic Games</FooterNavTitle>
                <FooterNavAdditional>
                  <FooterNavLink href='/'>Battle Breakers</FooterNavLink>
                  <FooterNavLink href='/'>Shadow Complex</FooterNavLink>
                  <FooterNavLink href='/'>Fortnite</FooterNavLink>
                  <FooterNavLink href='/'>Spyjinx</FooterNavLink>
                  <FooterNavLink href='/'>Infinity Blade</FooterNavLink>
                  <FooterNavLink href='/'>Unreal Tournament</FooterNavLink>
                  <FooterNavLink href='/'>Robo Recall</FooterNavLink>
                </FooterNavAdditional>
              </div>
            </FooterNavWrapper>
          </FooterWrapper>
      </FooterLayoutWrapper>
      <FooterSeparator />
      <FooterLayoutWrapper>
          <FooterBottomWrapper>
              <div>
                <FooterPolicyText>© 2021 TGC  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sed proin orci mi. Risus dolor ullamcorper senectus quam accumsan, tempor, metus. Aliquet eu sed sed viverra neque. Tellus volutpat sed pharetra cursus posuere. Sit quis egestas mi ut tortor erat tellus eu. Scelerisque velit, sit egestas arcu placerat at ut ut. Ipsum congue nunc ipsum ullamcorper fusce sollicitudin velit. Neque sed in eu, laoreet proin sed. Quam nec nunc amet elit amet vulputate nullam sed.
Vulputate proin praesent pharetra nibh rhoncus.</FooterPolicyText>
                <FooterNavPolicy>
                  <FooterNavLink href='/'>Terms of Service</FooterNavLink>
                  <FooterNavLink href='/'>Privacy Policy</FooterNavLink>
                  <FooterNavLink href='/'>Store Refund Policy</FooterNavLink>
                </FooterNavPolicy>
              </div>
              <FooterPayment>
                <img src={sslSecureLogo} alt='ssl secure logo' />
                <img src={visaLogo} alt='visa logo' />
                <img src={mastercardLogo} alt='mastercard logo' />
                <img src={amexLogo} alt='amex logo' />
              </FooterPayment>
                <TrustedGoogleImage src={trustedGoogleLogo} alt='trusted google logo' />
          </FooterBottomWrapper>
      </FooterLayoutWrapper>
    </StyledFeaturesBanner>
  );
}

export default Footer;
