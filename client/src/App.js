import React, { Fragment } from 'react';
import './App.css';

import InputLogs from './components/InputLogs';
import ListLogs from './components/ListLogs';
import Map from './components/Map'; // Import the Map component

function App() {
  const latitude = 51.505; // Replace with your latitude value
  const longitude = -0.09; // Replace with your longitude value

  return (
    <Fragment>
      <div className="container">
        <InputLogs />
        <ListLogs />
      </div>
      {/* <Map latitude={latitude} longitude={longitude} /> */}
    </Fragment>
  );
}

export default App;
