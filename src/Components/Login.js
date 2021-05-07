import React, { Component } from "react";
export default class LoginPage extends Component {
  render() {
    return (
      <div className="formCenter">
        <form className="formField" onSubmit={this.handleSubmit}>
          <h3>Login</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => (this.email = e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => (this.password = e.target.value)}
            />
          </div>

          
    );
  }
}
