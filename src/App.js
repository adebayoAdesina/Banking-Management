import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Login from './component/login';
import Register from './component/Register';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import UserBVN from './component/UserBVN';
import Userhome from './component/Userhome';
import Transfer from './component/Transfer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {  
  
  // const [myGood, setGoods] = useState([]);

  // const addInputs = (addinput)=>{
  //   setGoods( [...myGood, addinput]
  // )
  // }

  // console.log(myGood)

  return (
    <>
    <div className="navbar navbar-default sticky-top navbar-expand-md shadow text-center h5 p-2 mb-0 sticky-top header-transparent align-items-center" id="header">
      <Link to="/" className="text-white" style={{textDecoration: "none"}}>Home</Link> &nbsp;|&nbsp;
      <Link to="/component/register" className="text-white" style={{textDecoration: "none"}}>Register</Link> &nbsp;|&nbsp;
      <Link to="/component/login" className="text-white" style={{textDecoration: "none"}}>Log in</Link> &nbsp;|&nbsp;
    </div>
    
    <br/>
    <Switch>
      <Route path="/" exact component={Home}/>
      {/* <Route path="/component/Register"  exact render={(props) =><Register {...props}  addInput={addInputs}/>}/> */}
      <Route path="/component/Register"  exact component={Register}/>
      <Route path="/component/login" exact component={Login}/>
      <Route path="/component/UserBVN" exact component={UserBVN}/>
      <Route path="/component/Userhome" exact component={Userhome}/>
      <Route path="/component/Transfer" exact component={Transfer}/>
    </Switch>

    <div class="container-fluid p-5 mt-5" id="Footer">
        <div class="row mt-5">
            <div class="col"><img src="" alt=""/> 
               <h5> Personal Banking</h5>
               <h6>Savings Account</h6>
               <h6>Current Accounts</h6>
               <h6>Compare Accounts</h6>
               <h6>Cards</h6>
               <h6>Non Resident Nigerian (NRN) Service</h6>
               <h6>Loans</h6>
               <h6>Ways To Bank</h6>
               <h6>Private Banking</h6>
            </div>
            <div class="col"><img src="" alt=""/> 
                <h5>Business Banking</h5>
                <h6>Business Account</h6>
                <h6>Cards</h6>
                <h6>e-Banking Services</h6>
                <h6>Commercial Banking</h6>
                <h6>Corporate Banking</h6>
                <h6>Loans & Advances</h6>
                <h6>SME Banking</h6>
                <h6>Habari</h6>
                <h6>SME Resource Hub</h6>
            </div>
            <div class="col"><img src="" alt=""/> 
                <h5>About Mega-Bank</h5>
                <h6>Our Company</h6>
                <h6>Careers</h6>
                <h6>Corporate Social Responsibility</h6>
                <h6>Investor Relations</h6>
                <h6>Contact Us</h6>
            </div>
            <div class="col"><img src="" alt=""/> 
                <h5>Help & Security</h5>
                <h6>Account Reactivation</h6>
                <h6>Complaints & Enquiries</h6>
                <h6>Customer Feedback Survey</h6>
                <h6>Dispense Error</h6>
                <h6>Help Videos</h6>
                <h6>Self Service</h6>
                <h6>Security Centre</h6>
                <h6>Whistle Blower</h6>
            </div>
            <div class="col"><img src="" alt=""/> 
                <h5>Quick Links</h5>
                <h6>Find a Branch/ATM</h6>
                <h6>All your banking forms in one place</h6>
                <h6>BVN Linking Portal</h6>
                <h6>Financial Calculators</h6>
                <h6>iRefer</h6>
                <h6>Media Centre</h6>
                <h6>Internal Links</h6>
                <h6>Video Banking</h6>
                <h6>Open an Account</h6>
             </div>
        </div>
        </div>
    </>
  )
}

export default App;
