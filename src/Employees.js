import { connect } from "react-redux";
import { Link, HashRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import { loadEmployees } from "./store";

class Employees extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  componentDidMount() {
    this.props.employees = {};
    this.props.load(this.state.num);
  }
  //     componentDidUpdate(prevprops, prevState, snapshot) {
  //         console.log(prevState, 'prevstate');
  //       if (this.prevState !== this.state) {
  //         this.props.load(this.state.num);
  //       }
  //     }
  render() {
    const { employees } = this.props;
    console.log(this, "this in render");
    if (!employees.rows) return <h2>Loading</h2>;
    else {
      const pages = new Array(Math.ceil(employees.count / 50))
        .fill("")
        .map((val, idx) => idx);

      return (
        <div>
          <table className="employee-table-container">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {employees.rows.map(employee => {
                return (
                  <tr>
                    <td key={employee.id}>{employee.firstName}</td>
                    <td key={employee.id}>{employee.lastName}</td>
                    <td key={employee.id}>{employee.email}</td>
                    <td key={employee.id}>{employee.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="page-nav">
            {pages.map(_num => {
              return (
                <Link
                  onClick={() => {
                    this.setState({ num: _num });
                    return this.componentDidMount();
                  }}
                  to={`/${_num}`}
                >
                  {_num}
                </Link>
              );
            })}
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    load: num => {
      dispatch(loadEmployees(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
