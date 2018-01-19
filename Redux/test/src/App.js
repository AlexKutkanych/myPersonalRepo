import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  addCar = () => {
    const input = document.querySelector('.carInput');
    this.props.onAddCar(input.value);
    input.value = '';
  }
  render() {

    return (
      <div className="App">
        <input type="text" name="" className="carInput" />
        <button className="addCar"
                onClick={this.addCar}
          >Add Car</button>
        <ul className="list">
          {this.props.testStore.map((car, i) => <li key={i}>{car}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddCar: (carName) => {
      dispatch({ type: 'ADD_CAR', payload: carName })
    }
  })
)(App);
