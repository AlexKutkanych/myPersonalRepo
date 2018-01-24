import React, { Component, Fragment } from 'react';

class Cars extends Component {
  render(){
    const { carSegment } = this.props;
    return(
      <Fragment>
        <h1>{carSegment}</h1>
      </Fragment>
    )
  }
}

export default Cars;
