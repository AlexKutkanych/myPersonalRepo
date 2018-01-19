import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getCars } from './actions/cars';
import Main from './Main';
import PhotoGrid from './PhotoGrid';
import Single from './Single';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => {
  return (<Router>
        <div>
          <Main />
          <Switch>
            <Route exact path='/' component={PhotoGrid} />
            <Route exact path='/single' component={Single} />
          </Switch>
        </div>
      </Router>)
}



export default connect(
  state => ({
    cars: state.cars.filter(car => car.carName.includes(state.filterCars))
  }),
  dispatch => ({
    onAddCar: (carName) => {
      const payload = {
        id: Date.now().toString(),
        carName
      };
      dispatch({ type: 'ADD_CAR', payload })
    },
    onFindCar: (name) => {
      dispatch({ type: 'FIND_CAR', payload: name })
    },
    onGetCars: () => {
      dispatch(getCars());
    }
  })
)(App);
