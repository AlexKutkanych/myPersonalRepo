import React from 'react';
import './styles.scss';

const NavigationItem = ({ item, link }) => {
    return (
        <a href={`#${link}`} className="navigation__item">{item}</a>
    );
};

export default NavigationItem;