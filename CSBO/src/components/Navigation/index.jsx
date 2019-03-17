import React, { Component } from 'react';
import NavigationItem from '../NavigationItem';
import navItems from './navLinks';
import './styles.scss';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation-section">
                <div className="inner-wrapper">
                    <nav className="navigation">
                        {navItems.map((item, i) => <NavigationItem key={i} item={item.item} link={item.link}/>)}
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navigation;