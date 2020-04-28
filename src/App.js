import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { loadEmployees } from "./store";
import Employees from "./Employees";

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  componentDidMount() {
    this.props.load(this.state.num);
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

const mapDispatchToProps = dispatch => {
  return {
    load: num => {
      dispatch(loadEmployees(num));
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
