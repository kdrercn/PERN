import React, { Fragment } from "react";
import "./App.css";

import InputLogs from "./components/InputLogs";
import ListLogs from "./components/ListLogs";
import OpenStreetMap from "./components/OpenStreetMap";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputLogs />
        <hr className="bold-hr"/>
        <ListLogs />
        <hr className="bold-hr"/>
        <OpenStreetMap />
      </div>
    </Fragment>
  );
}

export default App;
