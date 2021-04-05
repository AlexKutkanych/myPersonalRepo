import React from 'react';
import styled from 'styled-components';
import InputBlock from '../InputBlock';
import { useForm } from 'react-hook-form';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import arrowIcon from '../../images/arrow.svg';
import { device } from '../../styles/constants';
import { ILoginFormData } from '../LoginForm/types';
import { Select, SelectArrow } from '../../styles/mixins';

const AcceptInvitationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  padding: 30px 20px 49px;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 650px;
    border-radius: 8px;
    padding: 96px 118px 81px;
  }

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 3px;
    }
  }
  
  button {
    margin-top: 73px;
  }
`;

const AcceptInvitationForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: ILoginFormData) => console.log(data);

  return (
    <AcceptInvitationFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Select>
        <SelectArrow src={arrowIcon} alt='arrow icon' />
        <InputBlock name='platform' placeholder='Your Platform Type' register={register} errors={errors} />
      </Select>
      <InputBlock name='platformId' placeholder='Your Platform ID' register={register} errors={errors} />
      <LoginRegisterButton>Accept Invitation</LoginRegisterButton>
    </AcceptInvitationFormWrapper>
  );
}

export default AcceptInvitationForm;
