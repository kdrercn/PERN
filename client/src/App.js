import React, { Fragment } from 'react';
import './App.css';

//components

import InputLogs from './components/InputLogs';
import ListLogs from './components/ListLogs';

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputLogs />
      <ListLogs />
    </div>
  </Fragment>
  );
}

export default App;
