import "../App.css";
import React from "react";

import { NavLink } from "react-router-dom";

export default class LogOut extends React.Component {
  handleChange = (event) => {};
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="formCenter" onSubmit={this.handleSubmit}>
        <h1>Successfully logged out</h1>
        <button class="formFieldButton">
          <NavLink className="nav-link" activeClassName="active" to="/Login">
            Login
          </NavLink>
        </button>
      </form>
    );
  }
}
