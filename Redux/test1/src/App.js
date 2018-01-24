import React, { Component } from 'react';
import { connect } from 'react-redux';


import PhotoGrid from './PhotoGrid/PhotoGrid';
import User from './components/User/User';
import Page from './components/Page/Page';
import UserWrapper from './UserWrapper/UserWrapper';
import YearSwitcher from './components/YearSwitcher/YearSwitcher';
import { getPhotos } from './actions/PageActions';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        test: 2015,
        ph: []
      }
    }

    componentDidMount(){
      this.props.getPhotos(2015, 'flower');
    }


  render() {
    const { user, page, setYear, getPhotos } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo album</h1>
          <UserWrapper />
        </header>
        <YearSwitcher currentYear={page.year}
                      switchYear={getPhotos}
                      changeActiveYear={this.changeActiveYear}
                      getPhotos={getPhotos}
                     />
                   <input id="test"/>
        <User name={user.name} />
        <Page photos={page.photos}/>
        <PhotoGrid />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    page: state.page
  }),
  dispatch => ({
    setYear: (year) => {
      dispatch({ type: 'SET_YEAR', payload: year })
    },
    getPhotos: (year, test) => {
      const request = document.querySelector('#test').value;
      dispatch(getPhotos(year, request || test))
    }
  })
)(App);
