import { Form } from "react-bootstrap";
import styled from 'styled-components';
import { Alert } from 'react-bootstrap'


const Step1 = (props) => {

return (
    <div>
    <h1>Get Started</h1>
    <ContainForm>
    <Form>
    <Form.Group>
    <Form.Control size="lg" value={props.fullName} type="text" placeholder="Your Name" onChange={e => props.setfullName(e.target.value)} name="full_name" required className="mt-3 mb-3"/>
    <Form.Control size="lg" value={props.email} type="email" name="email" onChange={e => props.setEmail(e.target.value)} placeholder="Your Email" required className="mt-3 mb-3"/>
    <Form.Control size="lg" value={props.password} type="password" name="password" onChange={e => props.setPassword(e.target.value)} placeholder="Password" required className="mt-3 mb-3"/>
    <Form.Control size="lg" value={props.password2} type="password" name="password2" onChange={e => props.setPassword2(e.target.value)} placeholder="Confirm Password" required className="mt-3 mb-3"/>
    {props.goodPass? 
    <p style={{color: "green"}}>Password looks good!</p> 
    : props.goodPass == null? 
    <p></p>
    :
    <p style={{color: "red"}}>Your password does not match the requirements</p>
    }
    </Form.Group>
    </Form>
    <Button onClick={props.gotoStep2} disabled={!props.validationComplete}>Continue</Button>
    {props.signupStep > 1 ?
    <Button onClick={props.backStep}>Back</Button>
    :
    <Button onClick={props.backStep} disabled>Back</Button>
    }
    
    </ContainForm>
    </div>
)
}

export default Step1;

const ContainForm = styled.div`
    text-align: left;
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
`;

const Button = styled.button `
height: 50px;
width: 150px;
background-color: blue;
border: none;
border-radius: 5px;
color: #fff;
margin: 10px;
margin-left: 0px;

:disabled {
    opacity: 0.2;
}

`;
