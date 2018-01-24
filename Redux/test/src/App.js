import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCars } from './actions/cars';
// import Main from './Main';
// import PhotoGrid from './PhotoGrid';
// import Single from './Single';
import CarLine from './CarLine';
import Cars from './Cars';
// import {
//   Switch,
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';


class App extends Component{
  addCar = () => {
    const input = document.querySelector('.carInput');
    this.props.onAddCar(input.value);
    input.value = '';
  }

  searchCar = () => {
    var searchInput = document.querySelector('.searchInput');
    this.props.onFindCar(searchInput.value);
  }

  deleteCar = (e) => {
    let t = e.target.previousSibling.id;
    this.props.onDeleteCar(t);
  }

  render(){
    return (
      <div>
        <div className="App">
          <input type="text" className="carInput" />
          <button className="addCar"
                  onClick={this.addCar}
            >Add Car</button>
          <div>
            <input type="text" className="searchInput"
              onChange={this.searchCar} />
            <button className="addCar"

              >Search Car</button>
          </div>
          <div>
            <button className="getCar"
                    onClick={this.props.onGetCars}
              >Get Car</button>
          </div>
        </div>
          <ul>
            {this.props.cars.map(({ id, carName }) => <CarLine key={id} id={id} carName={carName} deleteCar={this.deleteCar} />)}
          </ul>
          {this.props.carSegments.map((item, i) => <Cars key={i} carSegment={item}/>)}

      </div>
    )
  }
}


export default connect(
  state => ({
    cars: state.cars,
    carSegments: state.carSegments
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
    },
    onDeleteCar: (name) => {
      dispatch({ type: 'DELETE_CARS', payload: name });
    }
  })
)(App);
