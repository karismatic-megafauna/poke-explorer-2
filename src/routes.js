import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import Show from './Show';

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/show/:pokemon_name" component={Show}/>
    </div>
  </Router>
)

export default AppRouter;
