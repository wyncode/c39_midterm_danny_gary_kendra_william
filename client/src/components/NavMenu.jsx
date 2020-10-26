import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (    
    <Nav class="nav" activeKey="/" style={{ backgroundColor: 'blue' }} as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: 'white' }} href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: 'white' }} href="/beatles">
          About The Beatles
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: 'white' }} href="/team">
          About Us
        </Nav.Link>
      </Nav.Item>    
    </Nav>
  );
};

export default NavMenu;