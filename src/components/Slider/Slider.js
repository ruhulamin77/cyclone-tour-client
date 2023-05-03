// import { Carousel } from 'bootstrap';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider3 from '../../images/slider-1.jpg';
import slider1 from '../../images/slider-3.jpg';
import slider2 from '../../images/slider-4.jpg';
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption className="slider-caption">
            <h1>
              Enjoy Your Vacation With{' '}
              <span className="cyclone">Cyclone Tour</span>
            </h1>
            <p>
              The world is a book, and those who do not travel read only a page
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />

          <Carousel.Caption className="slider-caption">
            <h1>
              Enjoy Your Vacation With{' '}
              <span className="cyclone">Cyclone Tour</span>
            </h1>
            <p>
              The world is a book, and those who do not travel read only a page
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption className="slider-caption">
            <h1>
              Enjoy Your Vacation With{' '}
              <span className="cyclone">Cyclone Tour</span>
            </h1>
            <p>
              The world is a book, and those who do not travel read only a page
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
