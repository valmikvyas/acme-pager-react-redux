import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { loadEmployees } from "./store";
import Employees from "./Employees";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <HashRouter>
        <h1>ACME Pager</h1>
        <Route component={Employees} />
      </HashRouter>
    );
  }
}

export default connect(null, null)(App);
