var mock = [
  {
    id: 1,
    carName: 'BMW'
  },
  {
    id: 2,
    carName: 'Audi'
  },
  {
    id: 3,
    carName: 'VW'
  },
  {
    id: 4,
    carName: 'Toyota'
  },
  {
    id: 5,
    carName: 'Merc'
  }
]

export const getCars = () => dispatch => {
    setTimeout(() => {
      dispatch({ type: 'FETCH_CARS', payload: mock })
    }, 1000)
  }
