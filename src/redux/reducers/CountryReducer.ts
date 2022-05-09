import {
  CountryReducerState,
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
} from '../../types'

const initState: CountryReducerState = {
  countries: [],
  isLoading: false,
  error: '',
}

export default function countryReducer(
  state: CountryReducerState = initState,
  action: any
) {
  switch (action.type) {
  //fetch country, loading true
  case FETCH_COUNTRIES_LOADING:
    return {
      ...state,
      isLoading: true,
    }

    // if fetching is successful
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      countries: action.payload,
      error: '',
    }
    //if error comes while fetching
  case FETCH_COUNTRIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    }

  default:
    return state
  }
}
