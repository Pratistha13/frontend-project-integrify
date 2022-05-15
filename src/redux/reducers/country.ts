import { AllActions, Country } from '../../types'

import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
} from '../../types'

type InitState = {
  countries: Country[] | Country
  isLoading: boolean
  error: string
}

const initState: InitState = {
  countries: [],
  isLoading: false,
  error: '',
}

const countryReducer = (state = initState, action: AllActions) => {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return {
      ...state,
      isLoading: true,
    }

  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      countries: action.payload,
    }

  case FETCH_COUNTRIES_FAILURE:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    }

  default:
    return state
  }
}

export default countryReducer
