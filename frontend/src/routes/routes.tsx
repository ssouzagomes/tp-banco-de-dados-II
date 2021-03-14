import { Switch, BrowserRouter } from 'react-router-dom'

import Route from '../routes/Route'

import Welcome from '../pages/Welcome'
import Home from '../pages/Home';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Listening from '../pages/Listing'
import Schedule from '../pages/Schedule'
import Profile from '../pages/Profile';
import Details from '../pages/Details';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Welcome} path="/" exact />
        <Route component={Home} path="/home" isPrivate />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Listening} path="/listing" isPrivate />
        <Route component={Schedule} path="/schedule" isPrivate />
        <Route component={Profile} path="/profile" isPrivate />
        <Route component={Details} path="/details" isPrivate />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes