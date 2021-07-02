import { useState } from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { registerUser } from '../../actions/authActions'

const RegisterModal = (props) => {

// State 
const [show, setShow] = useState(false);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('')


const handleSubmit= (e) => {
    console.log("Submitted")
    e.preventDefault();
    props.registerUser(username, email, password); // Call the register action
  }

// Functions to show modal
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


return (
<div>
<Link to="#" onClick={handleShow} className="link">Register Now</Link>
<Modal show={show} onHide={handleClose}>
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Register</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit={handleSubmit}>
        <Form.Group>
             <Form.Label>Email</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group>
             <Form.Label>Username</Form.Label>
            <Form.Control onChange={e => setUsername(e.target.value)}  type="text" name="username" id="username" placeholder="Enter name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setPassword(e.target.value)}  type="password" name="password" id="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
</Modal>
</div>
)};



// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps, { registerUser })(RegisterModal);