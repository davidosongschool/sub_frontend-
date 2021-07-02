import React from 'react';
import styled from 'styled-components';
import logo from '../img/subify.png';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import RegisterModal from './auth/registerModal' 
import { connect } from 'react-redux';


const Navi = (props) => {

    const isLoggedIn = props.isAuthenticated;

    return (
        <StyledNav>
        <Container>
        <Navbar expand="lg">
        <Navbar.Brand href="#home"><img src={logo} alt="subify logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navlinks">
        <Link to="/" className="link">Home</Link>
        <Link to="/contact" className="link">Contact</Link>
        {isLoggedIn? 
        <Link to="/" className="link">Welcome</Link>
        :
        <RegisterModal />
        }
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>            
        </StyledNav>
        
     
    )
}

const StyledNav = styled.nav`
min-height: 8vh;
display: flex;
justify-content: space-between;
margin: auto;
align-items: center;
padding: 1rem 5rem;

    a {
        text-decoration: none;
        color: rgb(1,48,136);

    }

    .navlinks {
    list-style: none;
    display: flex;
    font-size: 1rem;
    }

    .link {
        padding-left: 10rem;
        position: relative;
        color: #333333;
    }

    img {
        width: 200px;
    }

`;



// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps,)(Navi);
