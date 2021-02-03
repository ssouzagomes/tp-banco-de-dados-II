import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
      <Route component={Home} path="/home" exact />
      <Route component={Login} path="/entrar" />
      <Route component={Register} path="/cadastrar" />
    </BrowserRouter>
  )
}

export default Routes