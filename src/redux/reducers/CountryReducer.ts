import {
  CountryActions,
  Country,
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
} from '../../types'

type InitState = {
  countries: Country[]
  isLoading: boolean
  error: string
}

const initState: InitState = {
  countries: [],
  isLoading: false,
  error: '',
}

const countryReducer = (state = initState, action: CountryActions) => {
  switch (action.type) {
  // fetch country, loading true
  case FETCH_COUNTRIES_LOADING:
    return {
      ...state,
      isLoading: true,
    }
    //if fetching is successful
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      countries: action.payload,
      error: '',
    }
    //if fetching has any errors
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
export default countryReducer
