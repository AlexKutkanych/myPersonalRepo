import React from 'react';
import './styles.scss';

const ProjectItem = ({ name, description, image }) => {
    return (
        <div className="project-item">
            <div className="project-item__image-wrapper">
                <img src={require(`../../images/${image}.jpg`)} alt="" className="project-item__image"/>
            </div>
            <h2 className="project-item__name">{name}</h2>
            <p className="project-item__description">{description}</p>
            <p>contacts</p>
        </div>
    )
}

export default ProjectItem;