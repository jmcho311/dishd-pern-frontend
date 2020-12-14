import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import CreateNew from '../pages/CreateNew'
import Search from '../pages/Search'
import CategoryShow from '../pages/CategoryShow'
import LocationShow from '../pages/LocationShow'
import DishShow from '../pages/DishShow'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/register' component={ Register } />
    <Route path='/login' render={ (routeComponentProps) => {
      return  <Login 
                {...routeComponentProps}
                // more props to come here
                currentUser={ props.currentUser }
                storeUser={ props.storeUser }
              />
    } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } />
    <PrivateRoute path='/new' component={ CreateNew } currentUser={ props.currentUser }/>
    <PrivateRoute path='/search' component={ Search } currentUser={ props.currentUser }/>
    <PrivateRoute path='/category' component={ CategoryShow } currentUser={ props.currentUser }/>
    <PrivateRoute path='/location' component={ LocationShow } currentUser={ props.currentUser }/>
    <PrivateRoute path='/dish' component={ DishShow } currentUser={ props.currentUser }/>
  </Switch>
)

export default Routes;