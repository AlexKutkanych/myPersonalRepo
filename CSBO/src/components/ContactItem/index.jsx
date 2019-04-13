import React from 'react';
import './styles.scss';

const ContactItem = ({ contact, type }) => {
    return (
        <li className={`contacts__item contacts__item_${type}`}>{contact}</li>
    );
};

export default ContactItem;