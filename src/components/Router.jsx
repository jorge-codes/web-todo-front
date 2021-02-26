import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './../App';
import Tasks from '../views/Tasks';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/user/:id' component={Tasks} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
