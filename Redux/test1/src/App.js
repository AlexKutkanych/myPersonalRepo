import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentGrid from './components/ContentGrid/ContentGrid';
import Footer from './components/Footer/Footer';
import UserWrapper from './components/UserWrapper/UserWrapper';
import FilterWrapper from './components/FilterWrapper/FilterWrapper';
import { getPhotos } from './actions/ImagesActions';
import { getVideos } from './actions/VideosActions';
import './App.css';
import img from './components/gallery.svg';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        test: 2015,
        label: [
          {photos: ['all', 'vector', 'photos']},
          {videos: ['film', 'animation']}
        ]
      }
    }

    componentDidMount(){
      this.props.getPhotos('all');
    }

  render() {
    const { page, filter, getPhotos, setFilter } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo album</h1>
          <UserWrapper />
        </header>
        <FilterWrapper
          getPhotos={getPhotos}
          getVideos={getVideos}
          setFilter={setFilter}
          filter={filter}
          label={this.state.label} />
        <ContentGrid content={page} />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    page: state.content,
    filter: state.filter
  }),
  dispatch => ({
    getPhotos: (filter) => {
      const request = document.querySelector('#test').value;
      dispatch(getPhotos(filter, request))
    },
    getVideos: (filter) => {
      const request = document.querySelector('#test').value;
      dispatch(getVideos(filter, request))
    },
    setFilter: (filter) => {
      dispatch({type: 'SET_FILTER', filter})
    }
  })
)(App);
