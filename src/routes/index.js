import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { /* matchRoutes, */ renderRoutes } from 'react-router-config';

import config from './config';

// const Index = () => <h2>HomeIndex</h2>;
// const PartOne = () => <h2>Home PartOne</h2>;
// const PartTwo = () => <h2>Home PartTwo</h2>;
// const About = () => <h2>About</h2>;
// const Users = () => <h2>Users</h2>;

const ROUTES = (
  <Router>
    {/* <Switch>
      <Route component={Index}>
        <Route exact path="/" component={Index} />
        <Route path="/home/1" component={PartOne} />
        <Route path="/home/2" component={PartTwo} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </Switch> */}
    {renderRoutes(config)}
  </Router>
);

export default ROUTES;
