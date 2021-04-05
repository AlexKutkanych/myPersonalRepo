import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import styled from 'styled-components';

interface ISnackbarComponent {
  open: boolean;
  error: boolean;
  text: string;
  handleClose: () => void;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarWrapper = styled.section`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  
  & > div {
    position: relative;
    top: 0;
    transform: none;
    left: 0;
  }
`;

export default function SnackbarComponent({ open, error, text, handleClose }: ISnackbarComponent) {
  return (
    <SnackbarWrapper>
      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
          {text}
        </Alert>
      </Snackbar>
    </SnackbarWrapper>
  );
}