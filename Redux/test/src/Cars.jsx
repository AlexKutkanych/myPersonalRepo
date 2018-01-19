class Cars extends Component {

  addCar = () => {
    const input = document.querySelector('.carInput');
    this.props.onAddCar(input.value);
    input.value = '';
  }

  searchCar = () => {
    var searchInput = document.querySelector('.searchInput');
    this.props.onFindCar(searchInput.value);
  }

  render() {
    return (
      <div className="App">
        <Main />
        <input type="text" className="carInput" />
        <button className="addCar"
                onClick={this.addCar}
          >Add Car</button>
        <div>
          <input type="text" className="searchInput" />
          <button className="addCar"
                  onClick={this.searchCar}
            >Search Car</button>
        </div>
        <div>
          <button className="getCar"
                  onClick={this.props.onGetCars}
            >Get Car</button>
        </div>
        <ul className="list">
          {this.props.cars.map((car, i) => <li key={i}>{car.carName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Cars;
