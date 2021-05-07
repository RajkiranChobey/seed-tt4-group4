import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Navbar } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav className="navbar-brand">Expense Tracker</nav>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/ViewTransaction"
            >
              View Transaction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/AddTransaction"
            >
              Add Transaction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="ViewAccountDetails"
            >
              View Account Details
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/Logout">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
