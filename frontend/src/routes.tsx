import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Welcome from './pages/Welcome'
<<<<<<< HEAD
import Home from './pages/Home';
=======
import Login from './pages/Login'
import Register from './pages/Register'
>>>>>>> ef6e37d6ab341394965229ad1cfd4b854145bbd2

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
<<<<<<< HEAD
      <Route component={Home} path="/home" exact />
=======
      <Route component={Login} path="/entrar" />
      <Route component={Register} path="/cadastrar" />
>>>>>>> ef6e37d6ab341394965229ad1cfd4b854145bbd2
    </BrowserRouter>
  )
}

export default Routes