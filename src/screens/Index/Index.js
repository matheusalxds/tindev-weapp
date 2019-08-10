import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Login from '../Auth/Auth';
import Dev from '../Dev/Dev';

function Index(props) {
  return (
    <Switch>
      <Redirect from="/" exact to="/login" />
      <Route path="/login" component={Login}/>
      <Route path="/dev/:id" component={Dev}/>
    </Switch>
  );
}

export default Index;
