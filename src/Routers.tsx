import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Country from './pages/Country/Country'

const Routers = () => (
  /* render all routes here*/

  <Switch>
    <Route path="/" component={Home} />
    <Route path="/Country/:id" component={Country} />
  </Switch>
)

export default Routers
