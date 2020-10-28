import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slideshow = () => {   
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/71lSHB3aitL._AC_SL1250_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/51F-JrWga3L.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;