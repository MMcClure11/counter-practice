import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'


import React from 'react'

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path='/class-counter'><ClassCounter /></Route>
      <Route exact path='/hook-counter'><HookCounter /></Route>
      <Route exact path='/countdown'><Countdown /></Route>
    </Switch>
    </Router>
  )
}

export default App


