import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Tab from '../Tab';
import Tabs from '../Tabs';

const StyledTabsSwitcher = styled.div`
  width: 100%;
  max-width: 942px;
`;

type Props = {
    children: ReactElement[],
    titles: string[]
}

const TabsSwitcher: React.FC<Props> = ({ children, titles }) => {
  return (
    <StyledTabsSwitcher>
        <Tabs>
            {titles.map((title, index) => <Tab key={index} title={title}>{children[index]}</Tab>)}
        </Tabs>
    </StyledTabsSwitcher>
  );
}

export default TabsSwitcher;
