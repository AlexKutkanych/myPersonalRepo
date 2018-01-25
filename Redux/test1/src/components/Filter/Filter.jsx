import React, { Component, Fragment } from 'react';
import '../../App.css';

class Filter extends Component {

  onFilterBtnClick = (e) => {
    const label = e.target.getAttribute('datalabel');
    this.props.setFilter(label);
    this.props.getPhotos(label);
  }

  render(){
    const { label, filter } = this.props;
    return (
      <div className="type-filter__block">
        <button className={'button' + ' ' + (filter.filter === label ? 'button_active' : null)}
            onClick={this.onFilterBtnClick}
            datalabel={label}>{label}</button>
        </div>
    )
  }
}

export default Filter;
