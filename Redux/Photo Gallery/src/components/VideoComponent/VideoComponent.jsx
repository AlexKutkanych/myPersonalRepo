import React, { Component, Fragment } from 'react';
import '../../App.css';

class VideoComponent extends Component {
  render(){
      const { source } = this.props;

    return (
        <Fragment>
          <video className="video-block" width="768" height="432" controls preload="none">
            <source src={source} type="video/mp4" />
          </video>
        </Fragment>

    )
  }
}

export default VideoComponent;
