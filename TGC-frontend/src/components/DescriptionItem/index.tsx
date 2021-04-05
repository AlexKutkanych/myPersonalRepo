import * as React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/mixins';
import { IDescriptionText } from '../Description/types';
import { device } from '../../styles/constants';

const StyledDescriptionItem = styled.div`
  flex-basis: 33%;
  text-align: center;
  padding: 0 25px;
  box-sizing: border-box;
  margin-bottom: 47px;  
  
  &:first-child {
    @media ${device.tablet} {
      margin-bottom: 75px;
    }
  }
`;

const DescriptionItemTitle = styled(Paragraph)`
  color: #A91B25;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const DescriptionItemText = styled(Paragraph)`
  color: #fff;
  font-family: 'San Francisco', Arial, sans-serif;

  * {
    font-family: 'San Francisco', Arial, sans-serif;
  }
`;

const DescriptionItem = ({ title, text }: IDescriptionText) => {
  return (
    <StyledDescriptionItem>
      <DescriptionItemTitle>{title}</DescriptionItemTitle>
      {/* TODO: sanitize inserted HTML */}
      <DescriptionItemText dangerouslySetInnerHTML={{__html: text}}/>
    </StyledDescriptionItem>
  );
}

export default DescriptionItem;
