import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import VideoBlock from './VideoBlock';
import AboutUs from './AboutUs';
import OurProjects from './OurProjects';
import Footer from './Footer';
import ToTopButton from './ToTopButton';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <VideoBlock />
        <AboutUs />
        <OurProjects />
        <Footer />
        <ToTopButton /> 
      </Fragment>
    );
  }
}

export default App;
