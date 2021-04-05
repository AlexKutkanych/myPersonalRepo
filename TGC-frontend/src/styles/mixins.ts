import styled from 'styled-components';
import { device } from './constants';
import arrowIcon from "../images/arrow-down.svg";

export const LayoutWrapper = styled.div<{ removeMobilePaddings?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1260px;
  margin: 0 auto;
  padding: ${({ removeMobilePaddings }) => removeMobilePaddings ? 0 : '0 20px'};

  @media ${device.tablet} {
    padding: 0 20px;
  }
`;

export const SimpleButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 16px;
  line-height: 19px;

  &:hover {
    cursor: pointer;
  }
`;

export const CtaButton = styled.button`
  padding: 11px 36px;
  background: #B2212B;
  color: #fff;
  border: none;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWithBorder = styled(CtaButton)`
  font-size: 20px;
  line-height: 24px;
  padding: 12px 83px;
  background: linear-gradient(0deg, rgba(190, 12, 12, 0.3), rgba(190, 12, 12, 0.3));
  border: 2px solid #DB4C4C;
  border-radius: 4px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin: 13px 0;
  color: #fff;
`;

export const HeadingH1 = styled.h1`
  font-size: 40px;
  line-height: 48px;
  color: #E9DBF0;
  text-align: center;

  @media ${device.tablet} {
    font-size: 60px;
    line-height: 72px;
  }
`;

export const HeadingH2 = styled.h2`
  margin: 0;
  color: #fff;
  font-weight: normal;
  text-align: center;
`;

export const PageHeader = styled(HeadingH1)`
  margin: 81px 0 2px;
  z-index: 1;
  font-weight: normal;
  
  @media ${device.tablet} {
    margin-top: 72px;  
  }
`;

export const PageHeaderBgImage = styled.img`
  width: 70%;
  position: absolute;
  top: 125px;

  @media ${device.tablet} {
    width: auto;
    top: 136px;
  }
`;

export const ShowOnDesktop = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const ShowOnMobile = styled.div`
  display: block;
  
  @media ${device.tablet} {
    display: none;
  }
`;

export const UserAccount = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  margin: 0;

  &::after {
    content: url(${arrowIcon});
    display: inline-block;
    margin-left: 10px;
  }
`;

export const UserContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 25px;
  right: 20px;
  
  > p {
    margin-right: 20px;
  }

  @media ${device.tablet} {
    position: relative;
    top: 0;
    margin: 33px 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 18px;
  right: 20px;

  @media ${device.tablet} {
    position: relative;
    margin-top: 22px;
  }
`;

export const MenuList = styled.ul`
  display: none;
  list-style: none;
  width: 100%;
  margin: 0;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  margin-right: 50px;
`;

export const StyledInputBlock = styled.div`
    font-family: 'San Francisco', Arial, sans-serif;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #B2212B;
    background: inherit;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.7;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: inherit;
    padding: 10px;
    box-sizing: border-box;

    ::placeholder {
        color: #fff;
    }
`;

export const InputBlockError = styled(Paragraph)`
    width: 100%;
    position: absolute;
    margin: 3px 0 0;
    font-size: 10px;
    line-height: 12px;
    color: #fff;
    opacity: 0.7;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: inherit;
`;

export const Select = styled.div`
  position: relative;
`;

export const SelectArrow = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;