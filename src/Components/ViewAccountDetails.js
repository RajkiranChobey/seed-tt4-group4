import {useState, useEffect} from "react";

const ViewAccountDetails = () => 
{
    //Array Data
    const [retrievedInfo, setRetrieveInfo] = useState([]);
    //Current Account
    //const [currentNumber, setCurrentNumber] = useState(0);
    //const [currentBal, setCurrentBal] = useState(0);
    //const [currentID, setCurrentID] = useState(0);

    ////Multiplier Account
    //const [multiplierNumber, setMultiplierNumber] = useState(0);
    //const [multiplierBal, setMultiplierBal] = useState(0);
    //const [multiplierID, setMultiplierID] = useState(0);

    ////Saving Account
    //const [savingNumber, setSavingNumber] = useState(0);
    //const [savingBal, setSavingBal] = useState(0);
    //const [savingID, setSavingID] = useState(0);
    
    const Click = (info) =>
    {
        setRetrieveInfo(
            retrievedInfo.map((data) =>
                data.bankInfoID === info.bankInfoID ? { ...data, display : !data.display } : data
            )
        )
    }

    //Data to input
    const custID = 4;
    const accountKey = 'lzdsqj5s-zqwh-m0hr-rrfz-3cvbsqb33m2';
    var display = false;

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

    useEffect (() => 
        {
            //Call to fetch the data
            fetchData();

            //Set a display boolean for our displaying purposes
            retrievedInfo.map((info) => (
                info["display"] = false
            ))
            console.log(retrievedInfo);
        }, []
    )

    //Display in HTML
    return (
    <>
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

                            <table style={{
                                textAlign : "left",
                                fontSize : 14
                            }}>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                                <tr>
                                    <td>07/05/2021</td>
                                    <td>+$1.00</td>
                                </tr>
                            </table>
                        </div>
                        ) : 
                        (" ")
                    }
                </div>
            ))
        }
    </>
    )
}

export default ViewAccountDetails