import React, { Component } from "react";

//start of varaibles used for testing
const givenXApiKey = 'HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0';
const givenCustID = 4 ;
const givenAccountKey = "lzdsqj5s-zqwh-m0hr-rrfz-3cvbsqb33m2";
const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add"
//end of variables used for testing
var inputPayeeID,inputExpenseCat,inputPayeeID,inputExpenseCat,inputAmount,inputEGift,inputMessage;

async function makeTransaction() {
  const response = await fetch(url, {
  method: 'POST',
  headers: {
      'x-api-key': givenXApiKey
  },
  body: JSON.stringify({
      custID: givenCustID ,
      accountKey: givenAccountKey,
      payeeID: inputPayeeID,
      expenseCat: inputExpenseCat,
      amount: inputAmount,
      eGift: inputEGift,
      message: inputMessage
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
  });
};

export default class AddTransactionPage extends Component {

  render() {
      return (
        <div className="formCenter">
          <form className="formField" onSubmit={this.makeTransaction}>
            <h3>Make Payment</h3>
  
            <div className="form-group">
              <label>Payee</label>
              <input
                type="number"
                className="form-control"
                placeholder="Number to pay to"
                onChange={(e) => (this.inputPayeeID = e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label>Expense Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Expense type"
                onChange={(e) => (this.inputExpenseCat = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                onChange={(e) => (this.inputAmount = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>eGift</label>
              <input
                type="checkbox"
                className="form-control"
                placeholder="Amount"
                onChange={(e) => (this.inputEGift = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <input
                type="Text"
                className="form-control"
                placeholder="Message to recipient"
                onChange={(e) => (this.inputMessage = e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-block">Pay</button>
          </form>
        </div>
      );
  }
}