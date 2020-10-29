import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import AbbyRoad from './albumImages/AbbyRoad.jpg';
import AHardDayNight from './albumImages/AHardDayNight.jpg';
import Beatles1 from './albumImages/Beatles1.jpg';
import Beatles2 from './albumImages/Beatles2.jpg';
import Beatles3 from './albumImages/Beatles3.jpg';
import BeatlesBlue from './albumImages/BeatlesBlue.jpg';
import Early from './albumImages/Early.jpg';
import HardDayUK from './albumImages/HardDayUK.jpg';
import Help from './albumImages/Help.jpg';
import LetItBe from './albumImages/LetItBe.jpg';
import RubberSoul from './albumImages/RubberSoul.jpg';
import TheBeatles from './albumImages/TheBeatles.jpg';

const Slideshow = () => {   
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={AbbyRoad}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={AHardDayNight}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Beatles1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Beatles2}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Beatles3}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={BeatlesBlue}
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Early}
          alt="Seventh slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={HardDayUK}
          alt="Eighth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Help}
          alt="Ninth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={LetItBe}
          alt="Tenth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={RubberSoul}
          alt="Eleventh slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={TheBeatles}
          alt="Twelfth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;