import React from 'react';
import Will from './images/Will.jpg';
import Danny from './images/Danny.jpg';
import Gary from './images/Gary.jpg';
import Kendra from './images/Kendra.jpg';
import '../App.css';

const AboutTeamPage = () => {
  return (
    <div className="fabFour">
      <h1> The Fab Four </h1>
      <div>
        <img
          style={{
            width: 200
          }}
          src={Gary}
          alt={'Gary'}
        />

        <h5>Gary Chong-Qui</h5>
        <p>I enjoy developing websites and I'm an avocado aficionado!</p>
      </div>
      <div>
        <img
          style={{
            width: 200
          }}
          src={Will}
          alt={'Will'}
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
            width: 240
          }}
          src={Danny}
          alt={'Danny'}
        />

        <p>I always enjoy a great laugh and a new adventure!</p>
      </div>
      <div>
        <img
          style={{
            width: 100
          }}
          src={Kendra}
          alt={'Kendra'}
        />

        <p>
          So excited to be a part of such an exhilarating opportunity! Love
          finding solutions to challenges that test logic and communication
          skills. This is the beginning of a new journey, which will lead me to
          working as a Software Engineer in Robotics for Neuralink.
        </p>
      </div>
    </div>
  );
};

export default AboutTeamPage;
