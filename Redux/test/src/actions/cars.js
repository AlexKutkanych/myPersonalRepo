var mockCars = [
  {
    id: 3,
    carName: 'BMW'
  },
  {
    id: 4,
    carName: 'VW'
  },
  {
    id: 5,
    carName: 'Toyota'
  },
  {
    id: 6,
    carName: 'Merc'
  },
  {
    id: 7,
    carName: 'ZAZ'
  }
]

export const getCars = () => dispatch => {
    setTimeout(() => {
      dispatch({ type: 'FETCH_CARS', payload: mockCars })
    }, 1000)
  }
