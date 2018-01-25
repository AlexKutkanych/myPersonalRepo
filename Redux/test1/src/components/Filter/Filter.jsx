import React, { Component, Fragment } from 'react';
import '../../App.css';

class Filter extends Component {

  onFilterBtnClick = (e) => {
    const label = e.target.getAttribute('datalabel');
    this.props.setFilter(label);
    this.props.getContent(label, '', 5);
  }

  render(){
    const { label, filter, title } = this.props;
    const contentType = title.split(' ')[1];
    return (
      <div className="type-filter__block">
        <button className={'button' + ' ' + (filter.filter === label ? 'button_active' : null)}
            onClick={this.onFilterBtnClick}
            datalabel={label}
            datacontenttype={contentType}>{label}</button>
        </div>
    )
  }
}

export default Filter;
