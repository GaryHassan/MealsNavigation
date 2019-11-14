import { MEALS } from '../../data/dummy-data'

const initialState = {
  meals: MEALS,
  filterdMeals: MEALS,
  favoriteMeals: []
}


const mealsReducer = (state = initialState, action) => {
  return state
}

export default mealsReducer