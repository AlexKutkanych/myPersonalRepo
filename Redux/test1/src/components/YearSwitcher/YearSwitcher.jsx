import React, { Component, Fragment } from 'react';
import Year from '../Year/Year';
import '../../App.css';

class YearSwitcher extends Component {

  render(){
    const { switchYear, year, currentYear  } = this.props;
    return (
      <Fragment>
        <Year year={2015} currentYear={currentYear} switchYear={switchYear}/>
        <Year year={2016} currentYear={currentYear} switchYear={switchYear}/>
        <Year year={2017} currentYear={currentYear} switchYear={switchYear}/>
      </Fragment>

    )
  }
}

export default YearSwitcher;
