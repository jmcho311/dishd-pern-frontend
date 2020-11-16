import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import GameList from '../pages/GameList'
import GameShow from '../pages/GameShow'
import NewGame from '../pages/NewGame'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path="/games/new" component={ NewGame } />
    <Route path='/games/:id' component={ GameShow } />
    <Route path='/games' component={ GameList } />
  </Switch>
)

export default Routes;