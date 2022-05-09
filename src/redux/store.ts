import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { AppState } from '../redux/reducers/index'

import createRootReducer from './reducers'

const initState: AppState = {
  countryReducer: {
    countries: [],
    isLoading: false,
    error: '',
  },
}

export default function makeStore(initialState = initState) {
  const middlewares = [thunk]
  let composeEnhancers = compose

  //redux dev tool setup
  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  //create redux store
  const store = createStore(
    createRootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
