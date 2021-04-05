import * as React from 'react';
import styled from 'styled-components';
import { Paragraph, CtaButton } from '../../styles/mixins';
import { IRegisteredUser } from './types';
import { mockedUsersList } from './mockedData';

const StyledRegisteredUserList = styled.div`
  max-width: 700px;
  margin-top: 44px;
`;

const UserListTitle = styled(Paragraph)`
  text-align: center;
  margin: 0 0 17px;
  font-family: 'San Francisco', Arial, sans-serif;
`;

const UserList = styled.div`
  display: flex;
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px 13px 13px;
  background-color: #181818;
  border-radius: 12px;
  
  &:not(:last-child) {
    margin-right: 21px;
  }
  `;

const UserName = styled(Paragraph)`
  margin: 0 0 6px;
  color: #E9DBF0;
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 800;
`;

const UserDate = styled(Paragraph)`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #817a84;
  margin: 0 10px;
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 600;
`;

const UserSum = styled(Paragraph)`
  font-size: 12px;
  line-height: 14px;
  color: #817a84;
  margin: 15px 0 20px;
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 600;
`;

const AddUserButton = styled(CtaButton)<{ added: boolean }>`
  width: 96px;
  padding: 9px;
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ added }) => added ? '#D2D2D2' : ''};
  color: ${({ added }) => added ? '#0C0C0C' : ''};
`;

const RegisteredUserList: React.FC = () => {
  return (
    <StyledRegisteredUserList>
        <UserListTitle>Also register for these tournaments</UserListTitle>
        <UserList>
          {mockedUsersList.map(({ id, name, sum, date, added }: IRegisteredUser) => {
            return (
              <UserCard key={id}>
                <UserName>{name}</UserName>
                <UserDate>{date}</UserDate>
                <UserSum>{sum}</UserSum>
                <AddUserButton added={added}>{added ? 'Added' : 'Add'}</AddUserButton>
              </UserCard>
            )
          })}
        </UserList>
    </StyledRegisteredUserList>
  );
}

export default RegisteredUserList;
