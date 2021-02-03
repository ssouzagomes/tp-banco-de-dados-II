import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
      <Route component={Home} path="/home" exact />
    </BrowserRouter>
  )
}

export default Routes