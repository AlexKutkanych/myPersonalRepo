import React, { Component } from 'react';
import { connect } from 'react-redux';

import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import Footer from './components/Footer/Footer';
import UserWrapper from './components/UserWrapper/UserWrapper';
import FilterWrapper from './components/FilterWrapper/FilterWrapper';
import { getPhotos } from './actions/PageActions';
import './App.css';
import img from './components/gallery.svg';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        test: 2015
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
          setFilter={setFilter}
          filter={filter} />
        <PhotoGrid photos={page.photos} />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    page: state.page,
    filter: state.filter
  }),
  dispatch => ({
    getPhotos: (filter) => {
      const request = document.querySelector('#test').value;
      dispatch(getPhotos(filter, request))
    },
    setFilter: (filter) => {
      dispatch({type: 'SET_FILTER', filter})
    }
  })
)(App);
