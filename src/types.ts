//Country
export type Country = {
  [index: string]: number | string | Array<string | number> | Object
  name: {
    common: string
  }
  flags: string
  region: string
  languages: Languages[]
  population: number
  borders: string[]
  svg: string
}

export type Languages = {
  name: string
}

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'

//action types for countries
export type FetchAllCountriesAction = {
  type: typeof FETCH_COUNTRIES
}

export type FetchCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: []
}

export type FetchCountriesFailure = {
  type: typeof FETCH_COUNTRIES_FAILURE
  payload: string
}

//Cart

export const ADD_COUNTRY_TO_CART = 'ADD_COUNTRY_TO_CART'
export const REMOVE_COUNTRY_FROM_CART = 'REMOVE_COUNTRY_FROM_CART'

export type AddCountryToCartAction = {
  type: typeof ADD_COUNTRY_TO_CART
  payload: []
}

export type RemoveCountryFromCartAction = {
  type: typeof REMOVE_COUNTRY_FROM_CART
  payload: []
}

export type AllActions =
  | FetchAllCountriesAction
  | FetchCountriesSuccessAction
  | FetchCountriesFailure
  | AddCountryToCartAction
  | RemoveCountryFromCartAction
