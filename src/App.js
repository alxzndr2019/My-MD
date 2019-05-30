import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Druginfo from "./Druginfo";
import AddDrug from "./components/AddDrug.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  state = {
    selectedDrug: {}
  };
  selectedDrugData = selectedDrug => {
    this.setState({
      selectedDrug: selectedDrug
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Druginfo" component={Druginfo} />
            <Route
              exact
              path="/Druginfo"
              render={props => (
                <Druginfo selectedDrugData={this.state.selectedDrug} />
              )}
            />
            <Route exact path="/AddDrug" component={AddDrug} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
