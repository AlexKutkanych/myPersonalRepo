import React, { Component } from 'react';
import Contacts from '../Contacts';
import './styles.scss';

class Footer extends Component {
    render() {
        return (
            <footer class="footer" id="contacts">
                <div class="footer__wrapper inner-wrapper">
                  <Contacts />
                </div>
            </footer>
        );
    }
}

export default Footer;
