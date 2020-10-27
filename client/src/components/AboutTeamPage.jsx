import React from 'react';
import '../App.css';

import Will from './Will.jpg';

import Gary from './images/gary.jpg';

const AboutTeamPage = () => {
  return (
    <>
      <h1> This is all about the Team! </h1>
      <div>
        <img
          style={{
            width: 100
          }}
          src={Gary}
        />

        <h5>Gary Chong-Qui</h5>
        <p>I enjoy developing websites and I'm anavocado aficionado!</p>
      </div>
      <div>
        <img
          style={{
            width: 200
          }}
          src={Will}
        />

        <h5>Will Dillard</h5>
        <p>
          I like working through problems and watching the soulutions come to
          life. I enjoy spending time with my family and enjoy working on
          becomeing a web developer.
        </p>
      </div>
      <div>
        <img
          style={{
            width: 100
          }}
          src={'#'}
        />

        <p>This should talk about the Team member 3</p>
      </div>
      <div>
        <img
          style={{
            width: 100
          }}
          src={'#'}
        />

        <p>This should talk about the Team member 4</p>
      </div>
    </>
  );
};

export default AboutTeamPage;
