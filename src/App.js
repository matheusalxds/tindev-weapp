import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Index from './screens/Index/Index';

function App() {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}

export default App;
