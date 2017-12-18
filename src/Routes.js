import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import UserProfile from './components/UserProfile';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path={"/"} component={App} />
        <Route exact path="/users/:id" component={UserProfile} />
      </div>
    </BrowserRouter>
  );
};

export default Routes;