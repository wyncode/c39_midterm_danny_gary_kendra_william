import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (
// I made the background of this section green for testing purposes. We can change this when we are ready.
    <Nav activeKey="/" style={{ backgroundColor: 'green' }} as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: 'black' }} href="/">
          With A Little Help
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