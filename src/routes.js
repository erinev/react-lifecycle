import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/App';
import HomePage from './app/home/HomePage';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
  </Route>
);
