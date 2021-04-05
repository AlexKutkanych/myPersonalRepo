import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import InputBlock from '../InputBlock';
import CheckboxBlock from '../CheckboxBlock';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import { device } from '../../styles/constants';
import { InputBlockError, Input, StyledInputBlock } from '../../styles/mixins';
import SnackbarComponent from '../SnackBar';
import { IRegistrationFormData } from './types';
import { URL } from '../../utils/constants';

const RegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  padding: 82px 20px 76px;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 675px;
    border-radius: 8px;
    padding: 82px 107px 95px;
  }

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 52px;
    }
  }
`;

const DateOfBirthBlock = styled.div`
  display: flex;

  div:not(:last-child) {
    margin-right: 16px;
  }
`;

const RegistrationForm: React.FC = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const [snackbarOpened, setSnackbarOpened] = useState(false);
    const [isError, setIsError] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const history = useHistory();

    const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpened(false);
    };

    const onSubmit = (data: IRegistrationFormData) => {
        const { email, password, confirmPassword, country, fullName, birthDate, birthMonth, birthYear } = data;
        const dateOfBirth = `${birthMonth}-${birthDate}-${birthYear}`;
        setSnackbarOpened(false);

        axios.post(URL.SIGN_UP_URL, {
            fullName,
            password,
            confirmPassword,
            email,
            dateOfBirth,
            country
        })
        .then(function ({ data: { body: { message } } }) {
            setIsError(false);
            setSnackbarOpened(true);
            setSnackbarText(message);
            setTimeout(() => history.push('/tournament'), 3000);
        })
        .catch(function ({ response: { data: { body: { message } } } }) {
            setSnackbarOpened(true);
            setIsError(true);
            setSnackbarText(message);
        });
    };

    const password = useRef({});
    password.current = watch('password', '');

  return (
      <RegistrationFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <SnackbarComponent open={snackbarOpened} text={snackbarText} error={isError} handleClose={handleCloseSnackbar}/>
          <InputBlock name='fullName' placeholder='Full Name' register={register} errors={errors} />
          <InputBlock name='email' placeholder='Email' register={register} errors={errors} />
          <InputBlock name='password' type='password' placeholder='Password' register={register} errors={errors} />
          <StyledInputBlock>
              <Input
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm Password'
                  ref={register({
                      validate: value =>
                          value === password.current || 'The passwords do not match',
                      required: true
                  })}
              />
              {errors.confirmPassword && <InputBlockError>{errors.confirmPassword.message}</InputBlockError>}
              {errors.confirmPassword?.type === 'required' && <InputBlockError>This field is required</InputBlockError>}
          </StyledInputBlock>
          <InputBlock name='country' placeholder='Country' register={register} errors={errors} />
          <DateOfBirthBlock>
            <InputBlock placeholder='Birth Date' name='birthDate' register={register} errors={errors} />
            <InputBlock placeholder='Birth Month' name='birthMonth' register={register} errors={errors} />
            <InputBlock placeholder='Birth Year' name='birthYear' register={register} errors={errors} />
          </DateOfBirthBlock>
          <CheckboxBlock name='checkTerms' errors={errors} register={register} label='I agree to the Terms of Use and I have read and acknowledge the Privacy Policy.' />
          <LoginRegisterButton type='submit'>Join Now</LoginRegisterButton>
      </RegistrationFormWrapper>
  );
}

export default RegistrationForm;
