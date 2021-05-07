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

          <button className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    );
  }
