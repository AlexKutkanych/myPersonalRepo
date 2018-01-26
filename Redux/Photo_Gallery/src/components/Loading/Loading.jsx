import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';
import '../../App.css';

class Loading extends Component {
  render(){

    return (
        <div className="loading-block">
          <BeatLoader
          color={'dodgerblue'}
          size={70}
          />
        </div>
    )
  }
}

export default Loading;
