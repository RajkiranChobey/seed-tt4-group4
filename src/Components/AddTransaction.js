import React, { useState, Component } from "react";

//start of varaibles used for testing
const givenXApiKey = 'HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0';
const givenCustID = 4 ;
const givenAccountKey = "lzdsqj5s-zqwh-m0hr-rrfz-3cvbsqb33m2";
const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add"
//end of variables used for testing
var inputPayeeID;
var inputExpenseCat;
var inputPayeeID;
var inputExpenseCat;
var inputAmount;
var inputEGift=false;
var inputMessage;

async function makeTransaction() {
  const response = await fetch(url, {
  method: 'POST',
  headers: {
      'x-api-key': givenXApiKey
  },
  body: JSON.stringify({
      custID: givenCustID ,
      accountKey: givenAccountKey,
      payeeID: parseInt(window.inputPayeeID),
      expenseCat: window.inputExpenseCat,
      amount: parseInt(window.inputAmount),
      eGift: false,
      message: window.inputMessage
  })
  }).then(response => {
  if (response.ok) {
      return response.json();
  }
  throw new Error('Request failed.');
  },
  networkError => console.log(networkError.message)
  ).then(jsonResponse => {
      console.log(jsonResponse)
      return jsonResponse
  });
};

export default class AddTransactionPage extends Component {

  render() {
      return (
        <div className="formCenter">
          <form className="formField" onSubmit={makeTransaction}>
            <h3>Make Payment</h3>
  
            <div className="form-group">
              <label>Payee</label>
              <input
                type="number"
                className="form-control"
                placeholder="Number to pay to"
                onChange={(e) => (window.inputPayeeID = e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label>Expense Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Expense type"
                onChange={(e) => (window.inputExpenseCat = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Amount (in number)"
                onChange={(e) => (window.inputAmount = e.target.value)}
              />
            </div>
            <div className="form-group">
              
              <label>eGift</label>
              <input
                type="checkbox"
                className="form-control"
                onChange={(e) => (e.target.value? inputEGift=true:inputEGift=false)}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <input
                type="Text"
                className="form-control"
                placeholder="Message to recipient"
                onChange={(e) => (window.inputMessage = e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-block">Pay</button>
          </form>
        </div>
      );
  }
}