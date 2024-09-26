import React from 'react';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

const history = createBrowserHistory();

function App() {
  return (
        <Routes history={history} />
  );
}

export default App;
