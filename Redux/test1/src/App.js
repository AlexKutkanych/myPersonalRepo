import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentGrid from './components/ContentGrid/ContentGrid';
import Footer from './components/Footer/Footer';
import UserWrapper from './components/UserWrapper/UserWrapper';
import FilterWrapper from './components/FilterWrapper/FilterWrapper';
import { getImages } from './actions/ImagesActions';
import { getVideos } from './actions/VideosActions';
import './App.css';
import img from './components/gallery.svg';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        test: 2015,
        label: [
          {images: ['all', 'vector', 'photos']},
          {videos: ['film', 'animation']}
        ]
      }
    }

    componentDidMount(){
      this.props.getImages('all');
    }

  render() {
    const { page, filter, getImages, getVideos, setFilter } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo album</h1>
          <UserWrapper />
        </header>
        <FilterWrapper
          getImages={getImages}
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
    getImages: (filter) => {
      const request = document.querySelector('#test').value;
      dispatch(getImages(filter, request))
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
