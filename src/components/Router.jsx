//src/components/Router.jsx
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from '../views/Users';
import Tasks from '../views/Tasks';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Users} />
      <Route exact path='/user/:id' component={Tasks} />
      <Route component={Users} />
    </Switch>
  </BrowserRouter>
);

export default Router;
