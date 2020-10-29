import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Logo from './images/community.png'
import Title from './images/withalittlehelp.png'
const NavMenu = () => {
  return (
    <Nav className="nav" activeKey="/" style={{ backgroundColor: '#353E4B' }} as="ul">
      <div>
        <img className="logo" alt="logo" src={Logo} />
        <img className="title" alt="title" src={Title} />

        {/* <h7 className="help" img className="logo" alt="logo" src={Logo} style={{color: 'yellow'}} >With A Little Help</h7> */}
      </div>
  
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
      <div>
        <a href={'https://www.acrosstheuniverseday.com/atu.donate.html'}>Donate to Charity</a>
      </div>
    </Nav>
  );
};

export default NavMenu;
