import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

  // <Carousel>
  //     <Carousel.image>
  //     <img src="http://www.quickmeme.com/img/d2/d2a55033bd85f86fdb077fc6f1fb54db0d4543d2c1951a6b174a15d650c8ad90.jpg"></img>
  //     <img src="https://i.chzbgr.com/full/5251147264/h14AB39BA/not-sure-of-no-antivirus-or-avg-still-working"></img>
  //     </Carousel.image>
  // </Carousel>
};

export default Slideshow;
