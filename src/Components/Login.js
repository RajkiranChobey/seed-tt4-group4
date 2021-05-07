import axios from "axios";
import React, { Component } from "react";
<<<<<<< HEAD
export default class Login extends Component {
=======
import userSession from "./Components/userSession";

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password,
    };

    userSession.forEach((element) => {
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

>>>>>>> Login.js
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
                placeholder="Enter your Email"
                name="email"
                onChange={(e) => (this.email = e.target.value)}
              />
            </label>
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldLable"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => (this.password = e.target.value)}
            />
          </div>
          <div className="formField">
            <label className="formFieldCheckbox">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              Remember Me{" "}
            </label>
          </div>
          <div className="formField"></div>
          <button className="formFieldButton">Login</button>{" "}
        </form>
      </div>
    );
  }
}
