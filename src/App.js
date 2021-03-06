import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import Countdown from './components/Countdown'
import CountdownFive from './components/CountdownFive'
import PauseCounter from './components/PauseCounter'
import NavBar from './containers/NavBar'


import React from 'react'

const App = () => {
  return (
    <div data-test="component-app" className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route exact path='/class-counter'><ClassCounter /></Route>
        <Route exact path='/hook-counter'><HookCounter /></Route>
        <Route exact path='/countdown'><Countdown /></Route>
        <Route exact path='/countdown-5'><CountdownFive /></Route>
        <Route exact path='/pause-counter'><PauseCounter /></Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App


