import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectOverview from '../src/pages/Project-Overview';
import Form  from '../src/components/taskFormComponent'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={ProjectOverview} />
        <Route exact path='/form' component={Form}/>
      </Switch>
    </div>
  </Router>
)

export default App;

