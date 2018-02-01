import React, { Component, Fragment } from 'react';
import '../../App.css';

const InputBlock = ({ id, label, labelClass, inputClass, type, placeholder }) => {
    return (
        <div className="input-block">
          <label htmlFor={id}>
            {label}
          </label>
            <input id={id} type={type} name="" value="" placeholder={placeholder} />
        </div>
    )
}

export default InputBlock;
