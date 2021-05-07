import {useState, useEffect} from "react";

const ViewAccountDetails = () => 
{
    //Array Data
    const [retrievedInfo, setRetrieveInfo] = useState([]);
    const [transactionHistory, setTransactionHistory] = useState([
        {
            "Account" : "Current Account",
            "Date" : "07-03-2021",
            "Amount" : 10.00
        },
        {
            "Account" : "Multiplier Account",
            "Date" : "27-04-2021",
            "Amount" : 80.00
        },
        {
            "Account" : "Saving Account",
            "Date" : "27-04-2021",
            "Amount" : 70.00
        }
    ]);
    const [testTransactionHistory, setTestTransactionHistory] = useState([]);
    
    //On Click function
    var display = false;
    const Click = (info) =>
    {
        setRetrieveInfo(
            retrievedInfo.map((data) =>
                data.bankInfoID === info.bankInfoID ? { ...data, display : !data.display } : data
            )
        )
    }

    //Data to input to retrieve Json data from Database
    const custID = 4;
    const accountKey = 'lzdsqj5s-zqwh-m0hr-rrfz-3cvbsqb33m2';

    //Inputting the data to fetch the information
    const fetchData = async () => 
    {
        const res = await fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts',
        {
            method: 'POST',
            headers : {'x-api-key' : 'HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0'},
            body : JSON.stringify({'custID' : custID,
                                    'accountKey' : accountKey})
        });

        const data = await res.json();
        console.log(data);
        setRetrieveInfo(data);
    }

    //Inputting the data to fetch the information
    /*
    const fetchHistory = async () => 
    {
        const res = await fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',
        {
            method: 'POST',
            headers : {'x-api-key' : 'HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0'},
            body : JSON.stringify({'custID' : custID,
                                    'accountKey' : accountKey})
        });

        const thdata = await res.json();
        console.log(thdata);
        setTestTransactionHistory(thdata);
    }
    */

    useEffect (() => 
        {
            //Call to fetch the data
            fetchData();
            //fetchHistory();

            //Set a display boolean for our displaying purposes
            retrievedInfo.map((info) => (
                info["display"] = false
            ))
        }, []
    )

    //Display in HTML
    return (
    <>
        {/*This is currently hardcoded but can be changed to display current logged in user*/}
        <h1 style = {
            {marginLeft : 10}
        }>Hello Robert Doston</h1>

        <hr/>

        <h2 style = {
            {marginLeft : 10}
        }>Account Details</h2>

        {
            //Loop through the array using Javascript map() function
            retrievedInfo.map((info) => (
                <div key={info.bankInfoID} className = 'container'
                     style = {
                        {
                            marginLeft : 10,
                            marginTop : 10,
                            padding : 2,
                            paddingLeft : 10,
                            paddingBottom : 10,
                            paddingRight : 10,
                            borderStyle : "solid",
                            borderWidth : 2,
                            //borderLeft : "6px solid red",
                            backgroundColor : "lightgrey",
                            width : 400,
                        }
                     }
                     
                     onClick = {
                         () => Click(info)
                     }>
                    <p style = {{fontWeight : 200,
                                fontSize : 25,
                                margin : 0,
                                marginBottom : 2 }}>{info.accountName}</p>
                    <i style = {{fontSize : 14,
                                 marginBottom : 2}}>{info.accountNumber}</i><br/>
                    <div style = {{fontSize : 10,
                                   float : "left",
                                   paddingTop : 5,
                                   marginRight : 5}}>SGD</div>
                    <div style = {{fontSize : 15}}>{info.availableBal}</div>

                    {
                        //Displaying History
                        info.display ? 
                        (
                        <div>
                            <hr/>
                            <p style = {{fontWeight : 200,
                                    fontSize : 15,
                                    margin : 0,
                                    marginBottom : 2 }}>Transaction History</p>

                            <b style = {{
                                    fontSize : 14,
                                    margin : 0,
                                    marginBottom : 2 }}>Date</b>

                            <b style = {{
                                    fontSize : 14,
                                    margin : 0,
                                    marginBottom : 2,
                                    float : "right" }}>Amount</b>
                            <br/>

                            {/*Change here to accomodate the data from database*/}
                            {
                                transactionHistory.map((th) => (
                                    th.Account === info.accountName ? (
                                        <div>
                                            <div style = {{
                                                fontSize : 14,
                                                margin : 0,
                                                marginBottom : 2,
                                                float : "left" }}>{th.Date}</div>

                                            <div style = {{
                                                fontSize : 14,
                                                margin : 0,
                                                marginBottom : 2,
                                                float : "right" }}>${th.Amount}</div>
                                            <br/>
                                        </div>
                                     ) : (" ")
                                    
                                ))
                            }
                        </div>
                        ) : 
                        (' ')
                    }
                </div>
            ))
        }
    </>
    )
}

export default ViewAccountDetails