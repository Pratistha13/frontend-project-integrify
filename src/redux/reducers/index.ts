import { combineReducers } from 'redux'

import countryReducer from './CountryReducer'

const createRootReducer = () =>
  combineReducers({
    countryReducer,
  })

export default createRootReducer
