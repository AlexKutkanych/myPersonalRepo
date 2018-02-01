import React, { Component, Fragment } from 'react';
import '../../App.css';

const InputBlock = ({ id, label, labelClass, name, inputClass, type, value, placeholder, onChange }) => {
    return (
        <div className="input-block">
          <label htmlFor={id}>
            {label}
          </label>
            <input id={id}
                   type={type}
                   name={name}
                   value={value}
                   placeholder={placeholder}
                   onChange={onChange}
                   required />
        </div>
    )
}

export default InputBlock;
