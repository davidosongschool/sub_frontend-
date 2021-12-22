import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import ProgressBar from './steps/progressBar';
import { registerUser } from '../../../actions/authActions'
import { connect } from 'react-redux';
import { Alert } from "react-bootstrap";


const Signup = (props) => {

const [signupStep, setsignupStep] = useState(1);
const [emailError, setemailError] = useState(false);
const [emailErrorContent, setemailErrorContent] = useState("");

const anchor = document.querySelector('#contain-email-error');

const gotoStep2 = () => {
    const body = 
    {
        email: email,
    }

    const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

    let patt = new RegExp(/^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/);
    let res = patt.test(email);
    if (!res) {
        setemailError(true);
        setemailErrorContent("Please enter a valid email address");
    } 
    else {
    // Do Email Verification Here to See if email already exists or not 
    axios.post('http://127.0.0.1:8000/verification/check_email_exists/', body, config)
    .then(res => { 
        console.log(res.data)
        
        if (res.data) {
            setemailError(true);
            setemailErrorContent("Looks like this email already belongs to an account!");
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
          // Render step 2 
        else if (signupStep < 2) {
        setemailError(false);
        setsignupStep(signupStep + 1);
        
        }

    })
    }
}

const backStep = () => {
    if (signupStep  > 1) { 
    setsignupStep(signupStep -1);
    }
}

// Step One State 

// Store user input
const [fullName, setfullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [password2, setPassword2] = useState("");

// Store input feedback 
const [validationComplete, setvalidationComplete] = useState(false);
const [goodPass, setgoodPass] = useState(false);
const [goodMail, setgoodMail] = useState(false);
const [goodName, setgoodName] = useState(false);

// Step Two State 
const [businessName, setbusinessName] = useState("");
const [address1, setaddress1] = useState("");
const [address2, setaddress2] = useState("");
const [town, settown] = useState("");
const [county, setcounty] = useState("");


// Validate Information
useEffect(() => {

    // Validate Step One Information
    if (password.length > 5 && password === password2){
        setgoodPass(true);
    } else if (password.length === 0 && password2.length === 0) {
        setgoodPass(null);
    }
    else {
        setgoodPass(false);
    }

    if (email.length > 3) {
      
        setgoodMail(true);

    }  else {
        setgoodMail(false);
    }

    if (fullName.length > 3) {
        setgoodName(true);
    } else {
        setgoodName(false);
    }
    if (goodMail && goodPass && goodName) {
        setvalidationComplete(true);
    }
    else {
        setvalidationComplete(false);
    }

    // Validate Step Two Information 


}, [password, password2, goodPass, email, goodMail, fullName, goodName]);


const registerBusiness = () => {
    console.log("Register")
    props.registerUser(email, password);
}


return (
<div className="container">
<div className="row">
<div className="col-8 mx-auto text-center">
<SignUpForm>
<ProgressBar signupStep={signupStep}/>    
<div id='contain-email-error'>
{emailError ? 
    <Alert variant="danger">{emailErrorContent}</Alert>
    :
    null}
    </div>
{signupStep === 1 ?
    <Step1 gotoStep2={gotoStep2} password={password} password2={password2} email={email} fullName={fullName} signupStep={signupStep} setfullName={setfullName} setEmail={setEmail} goodPass={goodPass} validationComplete={validationComplete} setPassword={setPassword} setPassword2={setPassword2}/>
    : signupStep === 2 ?
    <Step2 registerBusiness={registerBusiness} backStep={backStep} signupStep={signupStep} businessName={businessName} setbusinessName={setbusinessName} address1={address1} setaddress1={setaddress1} address2={address2} setaddress2={setaddress2} town={town} settown={settown} county={county} setcounty={setcounty}/>
    :  <Step1 />
}
</SignUpForm>
</div>
</div>
</div>
)};


// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});


export default connect(mapStateToProps, { registerUser})(Signup);



const SignUpForm = styled.div`
background-color: #fff;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 5px;
`;