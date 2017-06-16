import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App'
import Show from './Show'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/show" component={Show}/>
    </div>
  </Router>
)

export default AppRouter
