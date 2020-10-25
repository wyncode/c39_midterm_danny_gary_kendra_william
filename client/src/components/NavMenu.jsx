import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (
// I made the background of this section green for testing purposes. We can change this when we are ready.
    <Nav activeKey="/" style={{ backgroundColor: 'green' }} as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/">
          FoodHouse
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutBeatles">
          About The Beatles
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
{/* changed recipe of the day to "song of the day". Would be cool if we could get this functional. Maybe tying it to the date? */}
        <Nav.Link style={{ color: '#fff' }} href="/songfOfTheDay">
            Song of the Day
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutUs">
          About Us
        </Nav.Link>
      </Nav.Item>
    
    </Nav>
  );
};


export default NavMenu;