import React, { ReactElement, useState } from 'react'
import TabTitle from '../TabTitle'
import styled from 'styled-components';
import { device } from '../../styles/constants';

type Props = {
    children: ReactElement[]
}

const TabsList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  justify-content: space-between;

  @media ${device.tablet} {
    justify-content: flex-start;
    padding-left: 40px;
  }
  
  li {
    &:first-child {
      margin: 0 0 0 30px;

      @media ${device.tablet} {
        margin: 0 50px 0 0;
      }
    }

    &:last-child {
      margin-right: 30px;
    }

    @media ${device.tablet} {
      margin-right: 50px;
    }
  }
`;

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div>
            <TabsList>
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        title={item.props.title}
                        index={index}
                        setSelectedTab={setSelectedTab}
                        selectedTab={selectedTab}
                    />
                ))}
            </TabsList>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs