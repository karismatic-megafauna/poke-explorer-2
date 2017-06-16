import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
)

export default AppRouter
