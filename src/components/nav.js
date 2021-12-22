import React from 'react';
import styled from 'styled-components';
import logo from '../img/subify.png';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


const Navi = (props) => {

    const isLoggedIn = props.isAuthenticated;

    return (
        <StyledNav>
        <Container>
        <Navbar expand="lg">
        <Navbar.Brand href="#home">Subify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navlinks">
        <FontAwesomeIcon icon={faQuestionCircle} className="icon-style-1"/>
        {isLoggedIn? 
        <span onClick={props.logoutUser}><FontAwesomeIcon icon={faSignOutAlt} className="icon-style-1"/></span>
        :
        <Link to="/signup" className="link">Signup</Link>
        }
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>            
        </StyledNav>
        
     
    )
}

const StyledNav = styled.nav`

border-bottom: 1px solid lightgray;
display: flex;
width: 100%;
display:flex;
justify-content: right;
line-height: 50px;

    .navlinks {
    list-style: none;
    display: inline-block;
    font-size: 16px;
    margin-left: auto;
    color: rgba(1,1,1,0.4);

    }

    .icon-style-1 {
        margin-left: 10px;
        margin-right: 10px;

    }

`;



// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps, {logoutUser} )(Navi);
