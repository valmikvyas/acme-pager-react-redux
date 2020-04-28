import { connect } from "react-redux";
import { Link, HashRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import { loadEmployees } from "./store";

class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    const { employees } = this.props;
    console.log(employees, "render");
    if (!employees.rows) return <h2>Loading</h2>;
    else {
      return (
        <div className="page-nav">
          testing still
        </div>
      );
    }
  }
}

const mapStateToProps = ({ employees }) => {
  return {
    employees
  };
};

export default connect(mapStateToProps)(Nav);
