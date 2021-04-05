import * as React from 'react';
import styled from 'styled-components';
import { HeadingH2, LayoutWrapper } from '../../styles/mixins';
import { IFeaturesBanner, ITextAlign } from './types';
import { device } from '../../styles/constants';

const StyledFeaturesBanner = styled.div<{ banner: string }>`
  height: 216px;
  background: ${({ banner }) => `url(${banner})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const FeaturesBannerWrapper = styled(LayoutWrapper)<ITextAlign>`
  justify-content: center;

  @media ${device.tablet} {
    justify-content: ${({ textRight }) => textRight ? 'flex-end' : 'flex-start'};
  }
`;

const FeaturesBannerTextWrapper = styled.div<ITextAlign>`
  flex-basis: 100%;
  color: #fff;
  padding: 40px 0;

  @media ${device.tablet} {
    text-align: ${({ textRight }) => textRight ? 'left' : 'right'};
    flex-basis: 40%;
    padding: 47px 0;
  }
  
  h2 {
    text-align: left;
    @media ${device.tablet} {
      text-align: ${({textRight}) => textRight ? 'left' : 'right'};
    }
  }
`;

const FeaturesBannerTitle = styled(HeadingH2)`
  font-size: 32px;
  line-height: 39px;
`;

const FeaturesBannerText = styled.p`
  font-size: 12px;
  line-height: 16px;
  padding: 13px 0;
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 700;
`;

const FeaturesBanner = ({ textRight = false, banner, title, text }: IFeaturesBanner) => {
  return (
    <StyledFeaturesBanner banner={banner}>
      <FeaturesBannerWrapper textRight={textRight}>
          <FeaturesBannerTextWrapper textRight={textRight}>
            <FeaturesBannerTitle>{title}</FeaturesBannerTitle>
            <FeaturesBannerText>{text}</FeaturesBannerText>
          </FeaturesBannerTextWrapper>
      </FeaturesBannerWrapper>
    </StyledFeaturesBanner>
  );
}

export default FeaturesBanner;
