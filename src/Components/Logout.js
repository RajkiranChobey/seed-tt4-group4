import "../../App.css";
import React from "react";

import { NavLink } from "react-router-dom";

export default class PersonDelete extends React.Component {
  handleChange = (event) => {};
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Successfully logged out</h1>
        <button type="button" class="btn btn-secondary btn-lg">
          <NavLink className="nav-link" activeClassName="active" to="/Login">
            Login
          </NavLink>
        </button>
      </form>
    );
  }
}
