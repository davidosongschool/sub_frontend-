import { useState } from 'react';
import { connect } from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import { loginUser } from '../../actions/authActions'
import styled from 'styled-components';
import { Alert } from "react-bootstrap";

const LoginForm = (props) => {


// State 
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit= (e) => {
    e.preventDefault();
    props.loginUser(email, password); // Call the login action
  }
return (

<div>
    <h2 className="text-center">Login to Subify</h2>
    {props.loginFail? 
    <Alert variant="danger">Unable to login with those details!</Alert>
    :
    null}
    <FormWrapper>
    <Form onSubmit={handleSubmit}>
            <Form.Group>
             <Form.Label>Email</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)}  type="email" name="email" id="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setPassword(e.target.value)}  type="password" name="password" id="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
               Login
            </Button>
        </Form>
        </FormWrapper>
</div>
)};


// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    loginFail: state.auth.loginFail
});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps, { loginUser })(LoginForm);


// Styling

const FormWrapper = styled.div`

padding: 30px;
border: 1px solid lightgray;
margin: 20px;
`;