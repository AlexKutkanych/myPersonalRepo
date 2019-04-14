import React from 'react';
import Slider from "react-slick";
import ProjectItem from '../ProjectItem';
import settings from './settings';
import projectsList from './projects';
import './styles.scss';

class OurProjects extends React.Component {
    render() {
        return (
        <div className="our-projects">
            <div className="section-header__wrapper">
                <h1 className="section-header">Our Projects</h1>
            </div>
            <Slider {...settings}>
                {projectsList.map(({ id, name, description, image }) => <ProjectItem key={id} name={name} description={description} image={image} />)}
            </Slider>
        </div>
        );
    }
}

export default OurProjects;