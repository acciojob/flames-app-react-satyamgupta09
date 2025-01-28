import React, { Component, useState } from "react";
import Flames from "./Flames";
import '../styles/App.css';
// import "./styles.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Flames App</h1>
        <Flames />
      </div>
    );
  }
}

export default App;
