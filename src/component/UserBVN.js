import React from'react';

const UserBVN = () => {

    let importantDetails = JSON.parse(localStorage.getItem("BankApp"));

    // for (let index = 0; index < importantDetails.length; index++) {
    //     let finalLength = importantDetails.length--; 
    // }
    let finalLength = importantDetails.length-1;
    // console.log(importantDetails[finalLength].BVN);
    let BVN = importantDetails[finalLength].BVN;
    let AC= importantDetails[finalLength].AC;
    
    // console.log(importantDetails[0].BVN)
    
    // if (finalLength != null) {
    //     document.getElementById('generatedBVN').value = BVN;
    //     document.getElementById('generatedAccountNumber').value = AC;
    // }
    return (
        <>
            <div class="container">
                <div class="form-group">
                    <label for="">Generated my BVN</label>
                    <input type="number" placeholder="" disabled class="form-control form-control-sm" id="generatedBVN" value={BVN}/>
                </div>
                <div class="form-group">
                    <label for="">Generated Account Number</label>
                    <input type="number" placeholder="" disabled class="form-control form-control-sm" id="generatedAccountNumber" value={AC}/>
                </div>
            </div>
        </>
    )
}

export default UserBVN;