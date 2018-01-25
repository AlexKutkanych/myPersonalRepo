import React, { Component, Fragment } from 'react';
import Filter from '../Filter/Filter';
import '../../App.css';

class SortByImageType extends Component {

  render(){
    const { getPhotos, setFilter, filter } = this.props;
    return (
      <Fragment>
        <Filter filter={filter} label='all' getPhotos={getPhotos} setFilter={setFilter} />
        <Filter filter={filter} label='vector' getPhotos={getPhotos} setFilter={setFilter} />
        <Filter filter={filter} label='photos' getPhotos={getPhotos} setFilter={setFilter} />
      </Fragment>
    )
  }
}

export default SortByImageType;
