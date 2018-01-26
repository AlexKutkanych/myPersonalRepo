import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import '../../App.css';

class SortByContentType extends Component {

  render(){
    const { getContent, setFilter, filter, title, selectContent } = this.props;
    const filters = this.props.label.map((item, i) => {
      return <Filter filter={filter}
                     label={item}
                     getContent={getContent}
                     setFilter={setFilter}
                     key={i}
                     title={title}
                     selectContent={selectContent} />})
    return (
      <section className="filter-section">
        <h4 className="filter-title">{title}</h4>
        {filters}
      </section>
    )
  }
}

export default SortByContentType;
