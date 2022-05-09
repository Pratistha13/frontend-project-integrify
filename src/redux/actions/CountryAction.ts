import { Dispatch } from 'redux'
import axios from 'axios'

import {
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  CountryActions,
} from '../../types'

//fetch all countries
export function fetchAllCountriesLoading(): CountryActions {
  return {
    type: FETCH_COUNTRIES_LOADING,
  }
}

//fetch countries with success
export function fetchAllCountriesSuccess(countries: []): CountryActions {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

//fetch countries with failure
export function fetchAllCountriesFailure(error: string): CountryActions {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  }
}

//fetch countries data
export function fetchAllCountries() {
  return (dispatch: Dispatch) => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        const countries = res.data
        dispatch(fetchAllCountriesSuccess(countries))
      })
      .catch((err) => {
        dispatch(fetchAllCountriesFailure(err))
      })
  }
}
