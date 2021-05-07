import axios from "axios";
import React, { Component } from "react";
import playerDatabase from "./playerDatabase";

export default class LoginPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password,
    };

    playerDatabase.forEach((element) => {
      if (element.email === data.email && element.password === data.password) {
        console.log("Match");
      }
    });

    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="formCenter">
        <form className="formField" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                className="formFieldLabel"
                placeholder="email"
                onChange={(e) => (this.email = e.target.value)}
              />
            </label>
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

          <button className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    );
  }
}
