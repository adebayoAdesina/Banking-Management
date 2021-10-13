import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const [allInputs, setAllInputs] = useState([]);
    
    const [details, setDetails] = useState(
        {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            id: "",
            myBalance: 50000,
            BVN: (Math.floor((Math.random(11)*10000000000).toFixed(0))),
            AC: (Math.floor((Math.random(10)*1000000000).toFixed(0))),
        }
    )
    let b;

    let history = useHistory();
    const register = (e) => {
        if ( details.firstName !=="" && details.middleName !=="" && details.lastName !==""
        && details.email !=="" && (details.password !== details.confirmPassword)) {
            document.getElementById('errorConfirmPassword').innerHTML = `
                <div class="alert alert-danger">
                    <strong>Warning!</strong> Password must be the same as Confirm Pasword.
                </div>
            `
            e.preventDefault()
        }
        else if( details.firstName !=="" && details.middleName !=="" && details.lastName !==""
            && details.email !=="" && ((details.password !=="" )=== (details.confirmPassword !==""))) {

            // setAllInputs([...allInputs, details]);
           
            // b.push(details)
            b = [details];
            // console.log(allInputs)
            // localStorage.setItem("BankApp", JSON.stringify(b));
            
            // console.log(store.length)
            let store =JSON.parse(localStorage.getItem('BankApp')) 
            if(localStorage.BankApp){
                for (let index = 0; index < store.length; index++) {
                    let fromStorage = store[index]
                    if (fromStorage.email === details.email) {
                        document.getElementById('errorEmail').innerHTML = `
                        <div class="alert alert-danger">
                            <strong>Warning!</strong> Email already exist.
                        </div>`
                        return;

                    } else {
                        details.id = store.length;
                        allInputs.push(details)
                        store.push(details);
                        // alert(allInputs)
                        localStorage.setItem("BankApp", JSON.stringify(store));
                        history.push("/component/UserBVN");
                        return;
                    }
                }
                // addInput(details)
            }else{
                details.id = 0;
                allInputs.push(details)
                localStorage.setItem("BankApp", JSON.stringify(b));
                history.push("/component/UserBVN");
                 
                // addInput(details)
            }
            // history.push()
        }
        else if( details.firstName ==="" && details.middleName !=="" && details.lastName !==""
        && details.email !=="" && ((details.password !=="" )=== (details.confirmPassword !==""))) {
            document.getElementById('errorFirstName').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your First name.
            </div>
        `
        e.preventDefault()
        }
        else if( details.firstName !=="" && details.middleName ==="" && details.lastName !==""
        && details.email !=="" && ((details.password !=="" )=== (details.confirmPassword !==""))) {
            document.getElementById('errorMiddleName').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your Middle name.
            </div>
        `
        e.preventDefault()
        }
        else if( details.firstName !=="" && details.middleName !=="" && details.lastName ===""
        && details.email !=="" && details.password !==""  && details.confirmPassword !=="") {
            document.getElementById('errorLastName').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input last Name.
            </div>
        `
        e.preventDefault()
        }
        else if( details.firstName !=="" && details.middleName !=="" && details.lastName !==""
        && details.email ==="" && details.password !=="" && details.confirmPassword !=="") {
            document.getElementById('errorEmail').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your Email.
            </div>
        `
        e.preventDefault()
        } 
        else if( details.firstName !=="" && details.middleName !=="" && details.lastName !==""
        && details.email !=="" && details.password ==="" && details.confirmPassword !=="") {
            document.getElementById('errorPassword').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your Password.
            </div>
        `
        e.preventDefault()
        } 
        else if ( details.firstName ==="" && details.middleName ==="" && details.lastName ===""
        && details.email ==="" && details.password ==="" && details.confirmPassword ==="") {
            document.getElementById('errorPassword').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your Password.
            </div>`
            document.getElementById('errorEmail').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your Email.
            </div>
            `
            document.getElementById('errorLastName').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input last Name.
            </div>
            `
            document.getElementById('errorMiddleName').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your Middle name.
            </div>
            `
            document.getElementById('errorFirstName').innerHTML = `
            <div class="alert alert-danger">
                <strong>Warning!</strong> Please input your First name.
            </div>
            `
            document.getElementById('errorConfirmPassword').innerHTML = `
                <div class="alert alert-danger">
                    <strong>Warning!</strong> Password must be the same as Confirm Pasword.
                </div>
            `
        }
        // console.log(details.firstName)
    }

   
    const inputs = (e) => {
        if(e.target.value !== ""){
            let setInputs = {...details, [e.target.name]: e.target.value};
            setDetails(setInputs);
        }
    }

    // console.log(allInputs)
    return (
        <>
         <body className="bg-light mt-0">
             <div className="container">
                 <br/>
                 <h2 class="text-center">Welcome To Mega-Bank</h2>
                <form>
                    <hr/>
                    <div class="row">
                        <h3 class="text-center">Register now</h3>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="row">Kindly suply your details</div>
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">First Name
                                <input type="Text" placeholder="Ade" class="form-control form-control-sm" name="firstName" onKeyUp={inputs}/>
                                <div class="text-danger h6" id="errorFirstName"></div>
                            </label>
                        </div>
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">Middle Name
                                <input type="Text" placeholder="Bayo" required class="form-control form-control-sm" name="middleName" onKeyUp={inputs}/>
                                <div class="text-danger h6" id="errorMiddleName"></div>
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">Last Name
                                <input type="Text" placeholder="Adebayo" required class="form-control form-control-sm" name="lastName" onKeyUp={inputs}/>
                                <div class="text-danger h6" id="errorLastName"></div>
                            </label>
                        </div>
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">Email
                                <input type="email" placeholder="adebayoadesina789@gmail.com" required class="form-control form-control-sm" name="email" onKeyUp={inputs}/>
                                <div class="text-danger h6" id="errorEmail"></div>
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">Password
                                <input type="password" placeholder="***********" required class="form-control form-control-sm" name="password" onKeyUp={inputs}/>
                                <div class="text-danger h6" id="errorPassword"></div>
                            </label>
                        </div>
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">Confirm Password
                                <input type="password" placeholder="*************" required class="form-control form-control-sm" name="confirmPassword" onKeyUp={inputs}/>
                                <div class="text-danger h6" id="errorConfirmPassword"></div>
                            </label>
                        </div>
                    </div>
                <div class="row">
                    <Button className="btn btn-primary mx-auto col-md-2 col-sm-6 rounded-pill" onClick={register}>Register</Button>
                </div>
                </form>
             </div>
         </body>
        </>
    );
}
 
export default Register;