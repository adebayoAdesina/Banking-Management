  import React from 'react'
import { useHistory } from 'react-router';
import TransferHistory from './TransferHistory';

const Userhome = () => {
    // let ;
    let history = useHistory();

    let personalInformation = JSON.parse(localStorage.getItem("Details"));
    let regInfo = JSON.parse(localStorage.getItem("BankApp"));
    
    let firstName,middleName,lastName,email, AC;
    let myBalance;
    for (let index = 0; index < regInfo.length; index++) {
        let regInformation = regInfo[index]
        let personalInfo = personalInformation[0]
        if (personalInfo.firstName === regInformation.firstName) {
            firstName =personalInfo.firstName;
            middleName =personalInfo.middleName;
            lastName =personalInfo.lastName;
            email =personalInfo.email;
            myBalance = regInformation.myBalance;
            AC = personalInfo.AC;
            console.log(personalInfo.firstName)
        } 

    }
    
    let transferDetails = JSON.parse(localStorage.getItem("Transfer"))
    let userTransfer = []
    const detailsFunction = () => {
        if(localStorage.Transfer){
            for (let index = 0; index < transferDetails.length; index++) {
                
                let transferHistory = transferDetails[index]
                if (transferHistory.userAccountNumber === personalInformation[0].AC) {
                    let userTransferObject = {
                        enterDestinationAccount: transferHistory.enterDestinationAccount,
                        enterAmount: transferHistory.enterAmount,
                        enterNarration: transferHistory.enterNarration,
                    }
                    userTransfer.push(userTransferObject)
                }
            }
        }
    }
    detailsFunction()
    // console.log(personalInformation[0].firstName)
    const transferPage = () => {
        history.push('/component/Transfer')
    }
    return (
        <>
        <div className="container">
            <marquee>Welcome {firstName} {middleName} {lastName}</marquee>
            <div class="col-7">            
            <hr/>
            <div className="row">
                <div className="col text-center">Balance</div>
                <div class="col text-center h3">₦{myBalance}</div>
            </div>
            <hr/><hr/>
            <div class="row">
                <div CLASS="text-center h6">QUICK OPTION</div>
            </div>
            
            <div class="row">
                <div class="col text-center bg-light h6 p-5 m-2" style={{borderRadius: 10}} onClick={transferPage} id="transfer">
                    Transfer
                </div>
                <div class="col text-center bg-light h6 p-5 m-2" style={{borderRadius: 10}} id="transfer">
                    Buy Airtime
                </div>
            </div>
            <div class="row">
                <div class="col-6 mx-auto text-center bg-light h6 p-5 m-2" style={{borderRadius: 10}} id="transfer">
                    Invest
                </div>
            </div>
            <hr/>
            <div>
                <div>TRANSFER HISTORY</div>
                {userTransfer!==""? userTransfer.map((history, i) => (<TransferHistory history={history} i= {i}/>)):<div>No Transaction Yet</div>}
            </div>
            </div>

            <div className="col-5">
                
            </div>
        </div>
        </>
    )
}

export default Userhome;