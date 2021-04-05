import React from 'react';
import styled from 'styled-components';
import InputBlock from '../InputBlock';
import { Paragraph } from '../../styles/mixins';
import { useForm } from 'react-hook-form';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import circledCheckIcon from '../../images/circled-check.svg';
import arrowIcon from '../../images/arrow.svg';
import { device } from '../../styles/constants';
import { ILoginFormData } from '../LoginForm/types';
import { Select, SelectArrow } from '../../styles/mixins';

const PaymentSuccessFormWrapper = styled.form`
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
    padding: 30px 118px 49px;
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

const SuccessMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessMessage = styled(Paragraph)`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PaymentSuccessForm: React.FC = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: ILoginFormData) => console.log(data);
  return (
    <PaymentSuccessFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SuccessMessageBlock>
        <img src={circledCheckIcon} alt='check icon' />
        <SuccessMessage>we recieved your payment</SuccessMessage>
      </SuccessMessageBlock>
      <Select>
        <SelectArrow src={arrowIcon} alt='arrow icon' />
        <InputBlock name='platform' placeholder='Your Platform Type' register={register} errors={errors} />
      </Select>
      <InputBlock name='platformId' placeholder='Your Platform ID' register={register} errors={errors} />
      <InputBlock name='email' placeholder='Email of Player #2' type='email' register={register} errors={errors} />
      <LoginRegisterButton>Submit</LoginRegisterButton>
    </PaymentSuccessFormWrapper>
  );
}

export default PaymentSuccessForm;
