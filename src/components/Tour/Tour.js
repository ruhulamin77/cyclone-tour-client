import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/default.jpg';
import './Tour.css';

const Tour = (props) => {
  const { _id, name, description, price, img, duration } = props.tour;

  return (
    <Col>
      <div className="tour-card" style={{ marginBottom: '40px' }}>
        {/* <div className="text p-3 text-light">
          {description.slice(0, 250)}
          <Link to={`/tours/tourDetails/${_id}`}>
            <button className="btn-book d-block text-none">Book Now</button>
          </Link>
        </div> */}
        <div className="card-image">
          <Card.Img
            variant="top"
            className="p-2 "
            height="200px"
            src={img ? img : defaultImg}
          />
        </div>
        <Card.Body>
          <Card.Title className="tour-title">{name}</Card.Title>
          <span className="d-flex align-items-center">
            <p className="duration">{duration}</p>
            <p className="ms-auto price">$ {price}</p>
          </span>
          <Link to={`/tours/tourDetails/${_id}`}>
            <button className="btn-book">Book Now</button>
          </Link>
        </Card.Body>
      </div>
    </Col>
  );
};

export default Tour;
