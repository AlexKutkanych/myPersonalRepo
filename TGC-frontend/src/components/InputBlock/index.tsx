import React, { useState } from 'react';
import { IInputBlock } from './types';
import { formRestrictions } from '../../utils/formRestrictions';
import { InputBlockError, Input, StyledInputBlock } from '../../styles/mixins';

const InputBlock = ({
    id, type = 'text', label, name, placeholder, register, errors, pattern: inputPattern
                    }: IInputBlock) => {
    const { restrictions, errorMessage: { required: requiredAttr, minLength, maxLength, pattern, min, max } } = formRestrictions[name] || {};

    return (
        <StyledInputBlock>
            <Input name={name} placeholder={placeholder} ref={register(restrictions)} type={type} pattern={inputPattern} />
            {label && <label htmlFor={id}>
                {label}
            </label>}
            {errors[name]?.type === 'required' && <InputBlockError>{requiredAttr}</InputBlockError>}
            {errors[name]?.type === 'minLength' && <InputBlockError>{minLength}</InputBlockError>}
            {errors[name]?.type === 'maxLength' && <InputBlockError>{maxLength}</InputBlockError>}
            {errors[name]?.type === 'pattern' && <InputBlockError>{pattern}</InputBlockError>}
            {errors[name]?.type === 'min' && <InputBlockError>{min}</InputBlockError>}
            {errors[name]?.type === 'max' && <InputBlockError>{max}</InputBlockError>}
        </StyledInputBlock>
    );
};

export default InputBlock;
