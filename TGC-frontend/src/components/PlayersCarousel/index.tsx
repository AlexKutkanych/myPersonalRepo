import * as React from 'react';
import styled from 'styled-components';
import { HeadingH2, LayoutWrapper, Paragraph, ShowOnDesktop, ShowOnMobile } from '../../styles/mixins';
import playerImage from '../../images/player.jpg';
import playerMobileImage from '../../images/player-mobile.jpg';
import trophyGoldIcon from '../../images/trophy-gold.svg';
import circledArrow from '../../images/circled-arrow.svg';
import carouselBg from '../../images/carousel-bg.png';
import { mockedFeatures } from './mockedData';
import { IPlayerFeature } from './types';
import { device } from '../../styles/constants';

const StyledPlayerCarousel = styled.div`
  padding: 23px 0 0;
  background-color: #000;

  @media ${device.tablet} {
    padding-bottom: 185px;
  }
`;

const PlayerCarouselSlide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet} {
   flex-direction: row;
  }
`;

const CarouselArrow = styled.img`
  display: none;
  
  @media ${device.tablet} {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: 1;  
  }

  @media ${device.laptop} {
    right: 7%;
  }
`;

const PlayerCarouselBgImage = styled.img`
  position: absolute;
  left: -62px;
  top: 34px;
`;

const PlayerCarouselBg = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
    width: 550px;
    height: 340px;
    position: absolute;
    top: 77px;
    left: 26%;
    background-color: #101010;
  }
`;

const PlayerImageBlock = styled.div`
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    margin-right: 57px;
  }
  
  img {
    width: 100%;

    @media ${device.tablet} {
      width: auto;
    }
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  position: absolute;
  left: 19px;
  bottom: 19px;
  
  img {
    width: 38px;
  }
`;

const PlayerPersonalInfo = styled.div`
  margin-left: 9px;
`;

const PlayerName = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  margin: 3px 0;
`;

const PlayerTitle = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #EDBE00;
  margin: 0;
`;

const PlayerDescription = styled.div`
  flex-basis: 41%;
  color: #fff;
  padding: 37px 27px;
  z-index: 1;

  @media ${device.tablet} {
    padding: 47px 0;
  }
`;

const DescriptionTitle = styled(HeadingH2)`
  font-size: 16px;
  line-height: 19px;
  text-align: left;

  @media ${device.tablet} {
    font-size: 32px;
    line-height: 39px;
  }
`;

const DescriptionText = styled(Paragraph)`
  margin: 23px 0;
  color: #878787;
  font-family: 'San Francisco', Arial, sans-serif;

  @media ${device.tablet} {
    margin: 25px 0 53px;
    max-width: 84%;
  }
`;

const PlayerFeaturesBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    max-width: 67%;
  }
`;

const PlayerFeaturesItem = styled.div``;
const PlayerFeatureValue = styled.p`
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  text-align: center;
`;

const PlayerFeature = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: 0;
  color: #878787;
  font-family: 'San Francisco', Arial, sans-serif;
  text-align: center;
`;

const PlayersCarousel = () => {
  return (
    <StyledPlayerCarousel>
      <LayoutWrapper removeMobilePaddings={true}>
        <PlayerCarouselSlide>
          <PlayerCarouselBgImage src={carouselBg} alt="carousel background image" />
          <PlayerImageBlock>
            <ShowOnDesktop><img src={playerImage} alt="player" /></ShowOnDesktop>
            <ShowOnMobile><img src={playerMobileImage} alt="player" /></ShowOnMobile>
            <PlayerInfo>
            <img src={trophyGoldIcon} alt="trophy" />
            <PlayerPersonalInfo>
                <PlayerName>Travis Blackburn</PlayerName>
                <PlayerTitle>Winner of Tournament #12</PlayerTitle>
            </PlayerPersonalInfo>
            </PlayerInfo>
          </PlayerImageBlock>
          <PlayerDescription>
            <DescriptionTitle>Lorem ipsum consectetur adipiscing elit!</DescriptionTitle>
            <DescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis odio at ipsum, nec habitant vestibulum, urna id natoque. Pharetra habitasse lectus at sed pellentesque proin elementum.</DescriptionText>
            <PlayerFeaturesBlock>
              {mockedFeatures.map(({ id, feature, value }: IPlayerFeature) => {
                return (
                  <PlayerFeaturesItem key={id}>
                    <PlayerFeatureValue>{value}</PlayerFeatureValue>
                    <PlayerFeature>{feature}</PlayerFeature>
                  </PlayerFeaturesItem>
                )
              })}
            </PlayerFeaturesBlock>
          </PlayerDescription>
          <CarouselArrow src={circledArrow} alt="player" />
          <PlayerCarouselBg />
        </PlayerCarouselSlide>
      </LayoutWrapper>
    </StyledPlayerCarousel>
  );
}

export default PlayersCarousel;
