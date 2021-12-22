import styled from "styled-components";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const Header = () => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


// Store user input for register
const [fullName, setfullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [password2, setPassword2] = useState("");


// Store user input for login
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");



// Form Type 1 = Login 
// Form Type 2 = Register
const [formType, setFormType] = useState(2);

const handleSubmit= (e) => {
    e.preventDefault();
   // props.loginUser(email, password); // Call the login action
  }



return (
<ContainHeader>
<div className="header-links">
    <ul>
        <li>
            <Button variant="primary" onClick={handleShow}>
                My Account
            </Button>
        </li>
        <li>Link 2</li>
    </ul>
</div>
      <Modal show={show} onHide={handleClose}>
          {formType === 1?
          <div>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
             <Form.Label>Email</Form.Label>
            <Form.Control onChange={e => setLoginEmail(e.target.value)}  type="email" name="email" id="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setLoginPassword(e.target.value)}  type="password" name="password" id="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
               Login
            </Button>
        </Form>
        <p>Don't have an account? <span onClick={() => setFormType(2)}>Register Here</span></p>
        </Modal.Body>
        </div>
        :formType === 2?
        <div>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
             <Form.Label>Full Name</Form.Label>
            <Form.Control onChange={e => setfullName(e.target.value)}  type="text" name="name" id="name" placeholder="Your Name"/>
            </Form.Group>
            <Form.Group>
             <Form.Label>Email</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)}  type="email" name="email" id="email" placeholder="Your Email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setPassword(e.target.value)}  type="password" name="password" id="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Retype Password</Form.Label>
                <Form.Control onChange={e => setPassword2(e.target.value)}  type="password2" name="password2" id="password2" placeholder="Retype Password"/>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
        </Form>
        <p>Already have an account? <span onClick={() => setFormType(1)}>Login Here</span></p>
        </Modal.Body>
        </div>
        :
        null
        }
        
      </Modal>

</ContainHeader>

)

}

const ContainHeader = styled.div`
height: 80px;
width: 100%;
background-color: #fafafa;
line-height: 80px;

.header-links {
text-align: right !important;
}

ul {
    list-style: none;
}

ul li {
display: inline-block;
text-decoratio: none;
margin-right: 10px;
}

`


export default ContainHeader;