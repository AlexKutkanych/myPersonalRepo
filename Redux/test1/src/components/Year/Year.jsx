import React, { Component, Fragment } from 'react';
import '../../App.css';

class Year extends Component {

  onYearBtnClick = (e) => {
    this.props.switchYear(+e.target.innerHTML);
  }

  render(){

    const { year, currentYear } = this.props;
    return (
      <Fragment>
        <h2 className={'year-filter' + ' ' + (currentYear == year ? 'year-filter_active' : null)} onClick={this.onYearBtnClick}>{year}</h2>
      </Fragment>
    )
  }
}

export default Year;
