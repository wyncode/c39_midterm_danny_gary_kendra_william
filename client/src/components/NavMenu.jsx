import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (    
    <Nav class="nav" activeKey="/" style={{ backgroundColor: 'purple' }} as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: 'black' }} href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: 'black' }} href="/AboutBeatlesPage">
          About The Beatles
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: 'black' }} href="/AboutTeamPage">
          About Us
        </Nav.Link>
      </Nav.Item>    
    </Nav>
  );
};


export default NavMenu;