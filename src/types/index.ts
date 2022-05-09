import { CountryReducerState } from './CountryTypes'
import { CartReducerState } from './CartTypes'

export * from './CountryTypes'
export * from './CartTypes'

//global App state

export type AppState = {
  countryReducer: CountryReducerState
  cartReducer: CartReducerState
}
