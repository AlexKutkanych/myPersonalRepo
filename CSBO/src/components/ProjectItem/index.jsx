import React from 'react';
import ContactItem from '../ContactItem';
import './styles.scss';
import contactList from '../Contacts/contactList';

const getMainContacts = contactList => contactList.filter(({ isMain }) => isMain);

const ProjectItem = ({ name, description, image }) => {
    return (
        <div className="project-item">
            <div className="project-item__image-wrapper">
                <div className="project-item__image-overlay">
                    <p className="project-item__image-overlay-title">Зателефонувати:</p>
                    <ul className="project-item__image-overlay-contacts">
                        {getMainContacts(contactList).map(({ value, type }) => <ContactItem contact={value} type={type} />)}
                    </ul>
                </div>
                <img src={require(`../../images/${image}.jpg`)} alt="" className="project-item__image"/>
            </div>
            <h2 className="project-item__name">{name}</h2>
            <p className="project-item__description">{description}</p>
        </div>
    )
}

export default ProjectItem;