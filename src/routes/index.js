import React from 'react';
import { HashRouter  as Router } from 'react-router-dom'
import { /* matchRoutes, */ renderRoutes } from "react-router-config";

import config from './config'

const ROUTES = (
  <Router>
    {renderRoutes(config)}
  </Router>
)

export default ROUTES