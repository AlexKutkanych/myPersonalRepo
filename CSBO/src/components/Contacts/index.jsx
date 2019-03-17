import React, { Component, Fragment } from 'react';
import ContactItem from '../ContactItem';
import contactsList from './contactList';
import './styles.scss';

class Contacts extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="section-header">Контакти:</h1>
                <ul>
                    {contactsList.map((contact, i) => <ContactItem key={i} contact={contact.value} type={contact.type} />)}
                </ul>
            </Fragment>
        );
    }
}

export default Contacts;
