import { Route, BrowserRouter } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Listening from './pages/Listing'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
      <Route component={Home} path="/home" />
      <Route component={Login} path="/entrar" />
      <Route component={Register} path="/cadastrar" />
      <Route component={Listening} path="/listing" />
      
    </BrowserRouter>
  )
}

export default Routes