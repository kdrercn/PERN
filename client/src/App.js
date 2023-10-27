import React, { Fragment } from "react";
import "./App.css";

import InputLogs from "./components/InputLogs";
import ListLogs from "./components/ListLogs";
import OpenStreetMap from "./components/Map";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputLogs />
        <hr className="bold-hr"/>
        <ListLogs />
        <hr className="bold-hr"/>
        <OpenStreetMap />
        <hr className="bold-hr"/>
      </div>
    </Fragment>
  );
}

export default App;
