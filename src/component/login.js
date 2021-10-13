import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = () => {

    let personalInformation = JSON.parse(localStorage.getItem("BankApp"));
    console.log(personalInformation)
    const [userLogIn, setUserLogin] = useState(
        {
            email: "",
            password: ""
        }
    )
    const inputUser = (e) => {
        let inputAllUsers = {...userLogIn, [e.target.name]: e.target.value}
        setUserLogin(inputAllUsers)

    } 
    let history = useHistory();

    const reducedDetails =[];
    const logInUser = () => {
        if (personalInformation === null) {
            document.getElementById('errorEmail').innerHTML = `
                <div class="alert alert-danger">
                    <strong>Warning!</strong> Please input correct mail.
                </div>
            `
            document.getElementById('errorPassword').innerHTML = `
                <div class="alert alert-danger">
                    <strong>Warning!</strong> Please input correct Password.
                </div>
            `
        }
        else {
        for (let index= 0; index < personalInformation.length; index++) {
            let personal = personalInformation[index];
            console.log(personal)
            if( userLogIn.email!== "" && userLogIn.password !== "" 
            && userLogIn.email === personal.email && userLogIn.password === personal.password) {
                let reducedDetail = {
                    firstName: personal.firstName, 
                    middleName: personal.middleName,
                    lastName: personal.lastName,
                    email: personal.email, 
                    myBalance: personal.myBalance,
                    AC: personal.AC
                }
              
                reducedDetails.push(reducedDetail)
                localStorage.setItem("Details", JSON.stringify(reducedDetails));
                history.push("/component/userhome")
            } 
            else if( userLogIn.email!== "" && userLogIn.password !== "") {
                document.getElementById('errorEmail').innerHTML = `
                    <div class="alert alert-warning">
                        <strong>Warning!</strong> Please input correct mail.
                    </div>
                `
                document.getElementById('errorPassword').innerHTML = `
                    <div class="alert alert-warning">
                        <strong>Warning!</strong> Please input password Password.
                    </div>
                `
            }
            else if (userLogIn.email=== "" && userLogIn.password !== "") {
                document.getElementById('errorEmail').innerHTML = `
                    <div class="alert alert-danger">
                        <strong>Warning!</strong> Please input your mail.
                    </div>
                `
            }
            else if (userLogIn.email!== "" && userLogIn.password === "") {
                document.getElementById('errorPassword').innerHTML = `
                    <div class="alert alert-danger">
                        <strong>Warning!</strong> Please input your Password.
                    </div>
                `
            }
            else {
                document.getElementById('errorEmail').innerHTML = `
                    <div class="alert alert-danger">
                        <strong>Warning!</strong> Please input your mail.
                    </div>
                `
                document.getElementById('errorPassword').innerHTML = `
                    <div class="alert alert-danger">
                        <strong>Warning!</strong> Please input your Password.
                    </div>
                `
            }
        }
        }
    }
    // console.log()

    return (
        <>
            <body className="bg-light mt-0">
             <div className="container">
                 <br/>
                 <h2 class="text-center">Welcome To Mega-Bank</h2>
                <form class="m-5">
                    <hr/>
                    <div class="row">
                        <h3 class="text-center">Log in</h3>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="row">Kindly suply your details</div>
                    <div class="row">
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">Email
                                <input type="email" placeholder="adebayoadesina789@gmail.com" required class="form-control form-control-sm" name="email" onKeyUp={inputUser}/>
                                <div class="text-danger h6" id="errorEmail"></div>
                            </label>
                        </div>
                        <div class="form-group col-md-6 col-12">
                            <label class="col-12">Password
                                <input type="password" placeholder="*****************" required class="form-control form-control-sm" name="password" onKeyUp={inputUser}/>
                                <div class="text-danger h6" id="errorPassword"></div>
                            </label>
                        </div>
                    </div>
                <div class="row">
                    <Button className="btn btn-primary mx-auto col-sm-2 col-6  rounded-pill" onClick={logInUser}>Log in</Button>
                </div>
                </div>
                </form>
             </div>
         </body>
        </>
    );
}
 
export default Login;