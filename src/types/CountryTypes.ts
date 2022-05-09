//reducer case constants
export const FETCH_COUNTRIES_LOADING = 'FETCH_COUNTRIES_LOADING'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'

//types

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
  nativeName: string
}
//action types
export type FetchAllCountriesLoadingAction = {
  type: typeof FETCH_COUNTRIES_LOADING
  payload?: string
}
export type FetchAllCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: []
}
export type FetchAllCountriesFailureAction = {
  type: typeof FETCH_COUNTRIES_FAILURE
  payload: string
}

export type CountryActions =
  | FetchAllCountriesLoadingAction
  | FetchAllCountriesSuccessAction
  | FetchAllCountriesFailureAction
