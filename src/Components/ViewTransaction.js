import './App.css';
import {useEffect, useState} from "react";

// function getDate(UTC){
//   var d = new Date(UTC);
//   return d.getDate
// }

function CashSent(transactions){
  let cashOut = 0.0;
  let cashIn = 0.0;
  transactions.forEach(transaction => {
    if(transaction.payeeID === 4){
      cashOut += transaction.amount;
    }
    else{
      cashIn += transaction.amount;
    }
  });
  console.log("Cash Out",cashOut);
  return cashOut;
}

function CashRcvd(transactions){
  let cashOut = 0.0;
  let cashIn = 0.0;
  transactions.forEach(transaction => {
    if(transaction.payeeID === 4){
      cashOut += transaction.amount;
    }
    else{
      cashIn += transaction.amount;
    }
  });
  console.log("Cash In",cashIn);
  return cashIn;
}

function GetTransaction() {
  const [transactions, setTransactions] = useState("");
  
  let listItems;

  useEffect(() => {
  const requestOptions = {
    method: 'POST',
    headers: {
            'x-api-key' :'HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0'
    },
    body: JSON.stringify({ 
      custID: 4, 
      accountKey: 'lzdsqj5s-zqwh-m0hr-rrfz-3cvbsqb33m2'
    })
  };

  fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', requestOptions)
  .then(response => response.json())
  .then(data => setTransactions(data))
  .catch(console.error);

  }, []);

  let cashIn = CashRcvd(transactions);
  let cashOut = CashSent(transactions);

  if(transactions) {
    listItems = transactions.map((transaction) => 
      <li key="{transaction.datetime}" className="transaction-item">
        <div>Date: {transaction.datetime}</div>
        <div>Amount: ${transaction.amount}</div>
        <div>Message: {transaction.message}</div>
        <div>Expense Category: {transaction.expenseCat}</div>
        <div>Payee ID: {transaction.payeeID}</div><br></br>
      </li>
    )

    return listItems;
    }
  return null;
}

function ViewTransaction() {
  return (
    <div className="Transactions">
      <div className="TransAnalytics">
      </div>
      <div className="Transactions">
        <ul>
          <GetTransaction />
        </ul>
      </div>
    </div>
  );
}

export default ViewTransaction;
