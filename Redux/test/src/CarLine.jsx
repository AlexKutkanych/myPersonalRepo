import React, { Component, Fragment } from 'react';

class CarLine extends Component {

  render(){
    const { id, carName, deleteCar } = this.props;
    return(
      <Fragment>
        <li className="car-item" id={id}>{carName}</li>
        <span className="delete-btn" onClick={deleteCar}>x</span>
      </Fragment>
    )
  }
}

export default CarLine;
