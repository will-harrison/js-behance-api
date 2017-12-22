import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import UserProfile from './components/UserProfile';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route exact path="/users/:id" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;