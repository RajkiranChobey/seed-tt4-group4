import React, { Component } from "react";
import axios from "axios";

export default class ViewAccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    const xApiKey = "HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0";
    const axiosConfig = {
      headers: {
        "x-api-key": xApiKey,
      },
    };
    const body = {
      username: "Group4",
      password: "2dWa&s5LS4OVlRD",
    };
    axios
      .post(
        "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",
        body,
        axiosConfig
      )
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      phoneNumber,
      accountKey,
      custID,
      lastName,
      address,
      email,
      firstName,
      gender,
      nric,
      firstName,
      age,
    } = this.state.data;
    return (
      <table style={{ width: "100%" }}>
        <caption>Account Details</caption>
        <tr>
          <th>Account Key</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>NRIC</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>custID#</th>
        </tr>

        <tr>
          <td>{accountKey}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{nric}</td>
          <td>{address}</td>
          <td>{phoneNumber}</td>
          <td>{email}</td>
          <td>{custID}</td>
          <td>{gender}</td>
        </tr>
      </table>
    );
  }
}
