import React from 'react';
import { ICheckboxBlock } from './types';
import { formRestrictions } from '../../utils/formRestrictions';
import { InputBlockError, Input, StyledInputBlock } from '../../styles/mixins';
import styled from "styled-components";
import checkIcon from '../../images/check-icon.svg';

const LabeledCheckbox = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;

    input {
      width: auto;
      display: none;
    }

    label {
      position: relative;
      padding-left: 32px;
      color: #fff;
      font-family: 'San Francisco', Arial, sans-serif;
      font-size: 12px;
      line-height: 21px;

      &::before {
        content: '';
        width: 19px;
        height: 19px;
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 12px;
        background-color: inherit;
        border: 1px solid #B2212B;
        vertical-align: middle;
      }
    }

    input:checked + label {
      &::after {
        content: url(${checkIcon});
        position: absolute;
        left: 1px;
        top: 3px;
      }
    }
    
    & > p {
      top: 25px;
    }
  }
`;

const CheckboxBlock = ({
    label, name, register, errors
 }: ICheckboxBlock) => {
    const { restrictions, errorMessage: { required } } = formRestrictions[name] || {};

    return (
        <LabeledCheckbox>
        <StyledInputBlock>
            <Input type='checkbox' id={name} name={name} ref={register(restrictions)}  />
            <label htmlFor={name}>
                {label}
            </label>
            {errors[name]?.type === 'required' && <InputBlockError>{required}</InputBlockError>}
        </StyledInputBlock>
    </LabeledCheckbox>
    );
};

export default CheckboxBlock;
