import React, { Component } from 'react';
import Cube from '../Cube';
import './styles.scss';

class AboutUs extends Component {
    render() {
        return (
            <div className="aboutus-section">
                <div className="aboutus-section__wrapper inner-wrapper">
                    <section className="aboutus-section__cube left-column">
                        <Cube />
                    </section>
                    <section className="aboutus-section__description right-column">
                        <h1 className="section-header">Про нас</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur labore atque. Nesciunt vel quibusdam possimus quisquam cum quia harum officiis, qui quam a, incidunt placeat assumenda facere eum atque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur labore atque. Nesciunt vel quibusdam possimus quisquam cum quia harum officiis, qui quam a, incidunt placeat assumenda facere eum atque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur labore atque. Nesciunt vel quibusdam possimus quisquam cum quia harum officiis, qui quam a, incidunt placeat assumenda facere eum atque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur labore atque. Nesciunt vel quibusdam possimus quisquam cum quia harum officiis, qui quam a, incidunt placeat assumenda facere eum atque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur labore atque. Nesciunt vel quibusdam possimus quisquam cum quia harum officiis, qui quam a, incidunt placeat assumenda facere eum atque?
                    </section>
                </div>
            </div>
        );
    }
}

export default AboutUs;
