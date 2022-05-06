import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Country from './pages/Country/Country'

const Routers = () => (
  /* render all routes here*/

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Country/:id" element={<Country />} />
  </Routes>
)

export default Routers
