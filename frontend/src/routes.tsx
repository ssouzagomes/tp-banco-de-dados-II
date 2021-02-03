import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Login from './pages/Login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
      <Route component={Login} path="/entrar" exact />
    </BrowserRouter>
  )
}

export default Routes