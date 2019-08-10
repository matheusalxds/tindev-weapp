import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Login from './Login/Login';

function Auth(props) {
  return (
    <Switch>
      <Route exact path="/login" component={Login}/>
    </Switch>
  );
}

export default Auth;
