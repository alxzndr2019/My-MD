import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Druginfo from "./Druginfo";
import { Route, Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="herotext">
          <h1>Best Drug Search💊😊</h1>
          <h6>For Everyone...</h6>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
