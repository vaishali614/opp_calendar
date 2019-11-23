import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #fff; }
  .navbar-nav {
    color: black;
    &:hover { color: #fff; }
  }
  .logo {
      height: 45px;
  }
  .linkStyle {
      color: black;
      float: left;
      textDecoration: none;
  }
  .login {
      position: absolute;
      right: 150px;
  }
  .signup {
      position: absolute;
      right: 40px;
  }
`;
const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img className="logo" alt="Girl Code IT" src="GCI logo.PNG"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="linkStyle">
          <Nav.Item><Nav.Link href="/codemap">CodeMap</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/">Opportunity Calendar</Nav.Link></Nav.Item>
        </Nav>
        <Nav className="login">
            <Button variant="outline-dark">Login</Button>
        </Nav>
        <Nav className="signup">
            <Button variant="info" style={{backgroundColor: '#42b983'}}>Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Header;