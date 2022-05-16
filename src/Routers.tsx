import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'

const Routers = () => (
  /* render all routes here*/

  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/:countryName" component={CountryPage} />
  </Switch>
)

export default Routers
