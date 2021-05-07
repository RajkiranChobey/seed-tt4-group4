import './App.css';
import {useEffect, useState} from "react";

function GetTransaction() {
  const [transactions, setTransactions] = useState("");
  
  let listItems
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

  if(transactions) {
    listItems = transactions.map((transaction) => 
      <li key="{transaction.datetime}">
        <div>Date of Transaction: {transaction.datetime}</div>
        <div>Customer ID: {transaction.custID}</div>
        <div>Amount: {transaction.amount}</div>
        <div>Message: {transaction.message}</div>
        <div>Payee ID: {transaction.payeeID}</div>
      </li>
    )

    return listItems;
    }
  return null;
}

function ViewTransaction() {
  return (
    <div className="Transactions">
      <ul>
        <GetTransaction />
      </ul>
      
    </div>
  );
}

export default ViewTransaction;
