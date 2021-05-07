import axios from "axios";
import React, { Component } from "react";
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

    const xApiKey='mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7';
    const axiosConfig= {​​​​​​​​
     headers: {​​​​​​​​
    'x-api-key': xApiKey
     }​​​​​​​​
    
    
     }​​​​​​​​
    const body={​​​​​​​​
    'username': "Group4",
    'password': "RDVdlFcb2W3H3i_"
    
     }​​​​​​​​
    axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', body, axiosConfig).then(
    res=> {​​​​​​​​
    console.log(res)
     }​​​​​​​​
    
     ).catch(
    err=> {​​​​​​​​
    console.log(err);
     }​​​​​​​
  }


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
