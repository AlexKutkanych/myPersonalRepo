import React from 'react';
import './styles.scss';

const ContactItem = ({ contact, type }) => {
    return (
        <li className={`__${type}`}>{contact}</li>
    );
};

export default ContactItem;