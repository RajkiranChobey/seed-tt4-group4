import {useState, useEffect} from "react";

const ViewAccountDetails = () => 
{
    //Array Data
    const [retrievedInfo, setRetrieveInfo] = useState([]);

    //Current Account
    const [currentNumber, setCurrentNumber] = useState(0);
    const [currentBal, setCurrentBal] = useState(0);
    const [currentID, setCurrentID] = useState(0);

    //Multiplier Account
    const [multiplierNumber, setMultiplierNumber] = useState(0);
    const [multiplierBal, setMultiplierBal] = useState(0);
    const [multiplierID, setMultiplierID] = useState(0);

    //Saving Account
    const [savingNumber, setSavingNumber] = useState(0);
    const [savingBal, setSavingBal] = useState(0);
    const [savingID, setSavingID] = useState(0);

    useEffect (() => 
        {
            //Data to input
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
                console.log(data[0].accountNumber);
                setCurrentNumber(data[0].accountNumber);
            }

            //Call to fetch the data
            fetchData();
        }, []
    )

    return (
    <div>
        <h2>Current Balance : {currentNumber}</h2>
    </div>
    )
}

export default ViewAccountDetails