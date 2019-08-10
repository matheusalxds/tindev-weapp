import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './List/List';

function Dev(props) {
  return (
    <Switch>
      <Route exact path="/dev/:id" component={List} />
    </Switch>
  );
}

export default Dev;
