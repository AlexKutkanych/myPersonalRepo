import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import VideoBlock from './VideoBlock';
import AboutUs from './AboutUs';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <VideoBlock />
        <AboutUs />
        <Footer />  
      </Fragment>
    );
  }
}

export default App;
