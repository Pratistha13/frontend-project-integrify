import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer, { AppState } from './Reducers'

const storeInitialState: AppState = {
  countryReducer: {
    countries: [],
    error: '',
    isLoading: false,
  },

  cartReducer: {
    cart: [],
  },
}

export default function makeStore(initialState = storeInitialState) {
  const middlewares = [thunk]

  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer,
    storeInitialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if ((module as any).hot) {
    ;(module as any).hot.accept('./Reducers', () => {
      const nextReducer = require('./Reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
