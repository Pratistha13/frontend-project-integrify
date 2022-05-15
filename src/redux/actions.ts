import axios from 'axios'
import { Dispatch } from 'react'

import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  AllActions,
  ADD_COUNTRY_TO_CART,
  Country,
  REMOVE_COUNTRY_FROM_CART,
} from '../types'

const url = 'https://restcountries.com/v3.1/all'
export const fetchCountries = () => async (dispatch: Dispatch<AllActions>) => {
  try {
    dispatch({
      type: FETCH_COUNTRIES,
    })

    const { data } = await axios.get(url)

    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
      payload: error,
    })
  }
}

export const addCountryToCart = (items: Country[] | any): AllActions => {
  return {
    type: ADD_COUNTRY_TO_CART,
    payload: items,
  }
}

export const removeCountryfromCart = (items: Country[] | any): AllActions => {
  return {
    type: REMOVE_COUNTRY_FROM_CART,
    payload: items,
  }
}
