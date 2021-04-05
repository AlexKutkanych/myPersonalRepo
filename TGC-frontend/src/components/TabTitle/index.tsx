import React, { useCallback } from 'react'
import styled from 'styled-components';
import { ITabTitle } from './types';

const StyledTabTitle = styled.li<{ isActive: boolean }>`
  font-size: 16px;
  line-height: 19px;
  border-bottom: 5px solid transparent;
  border-bottom-color: ${({ isActive }) => isActive ? '#CC3737': 'transparent'};
  color: ${({ isActive }) => isActive ? '#CC3737': '#fff'};
  margin-right: 50px;
  padding: 9px 0;
  
  button {
    border: none;
    background-color: transparent;
    color: inherit;
    padding: 0;
  }
`;

const TabTitle = ({ title, setSelectedTab, index, selectedTab }: ITabTitle) => {
    const onClick = useCallback(() => {
        setSelectedTab(index)
    }, [setSelectedTab, index]);

    return (
        <StyledTabTitle isActive={index === selectedTab}>
            <button onClick={onClick}>{title}</button>
        </StyledTabTitle>
    )
}

export default TabTitle