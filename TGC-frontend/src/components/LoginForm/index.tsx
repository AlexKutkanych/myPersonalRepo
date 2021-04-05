import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import InputBlock from '../InputBlock';
import SnackbarComponent from '../SnackBar';
import { ILoginFormData } from './types';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import { device } from '../../styles/constants';
import { URL } from '../../utils/constants';
import { useAuth } from '../../hooks/useAuth';
import { getUserService } from '../../services/getUserService';

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  padding: 82px 20px 76px;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 650px;
    border-radius: 8px;
    padding: 82px 118px 95px;
  }

  & > div {
    margin-bottom: 73px;
  }
`;

const ForgotPasswordLink = styled.a`
  margin: -40px 0 50px;
  color: #DB4C4C;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`;

const LoginForm: React.FC = () => {
    const [snackbarOpened, setSnackbarOpened] = useState(false);
    const [isError, setIsError] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const history = useHistory();
    const auth = useAuth();

    const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpened(false);
    };

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: ILoginFormData) => {
        const { email, password  } = data;
        setSnackbarOpened(false);

        axios.post(URL.SIGN_IN_URL, {
            email,
            password
        })
        .then(function ({ data: { body: { message, jwt } } }) {
            setIsError(false);
            setSnackbarOpened(true);
            setSnackbarText(message);
            setTimeout(() => auth.signin(jwt), 1000);

            const token = `${jwt.tokenType} ${jwt.accessToken}`;

            getUserService(token)
                .then(function ({ data: { body: { user } } }) {
                    auth.setUser(user);

                    if(auth.tournamentId) {
                      setTimeout(() => history.push('/payment'), 3000);
                    } else {
                      setTimeout(() => history.push('/tournament'), 3000);
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });

        })
        .catch(function ({ response: { data: { body: { message } } } }) {
            setSnackbarOpened(true);
            setIsError(true);
            setSnackbarText(message);
        });
    };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SnackbarComponent open={snackbarOpened} text={snackbarText} error={isError} handleClose={handleCloseSnackbar}/>
      <InputBlock name='email' placeholder='Email' register={register} errors={errors} />
      <InputBlock name='password' type='password' placeholder='Password' register={register} errors={errors} />
      <ForgotPasswordLink>Forgot Password?</ForgotPasswordLink>
      <LoginRegisterButton type='submit'>Login</LoginRegisterButton>
    </LoginFormWrapper>
  );
}

export default LoginForm;
