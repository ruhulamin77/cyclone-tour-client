import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Tour from '../../Tour/Tour';
import './Tours.css';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://cyclone-tour-server.onrender.com/tours')
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      <div className="my-5">
        <h2 className="text-warning ">Popular Tour</h2>
        <p>We have a unique way of meeting your adventurous expectations!</p>
      </div>
      {isLoading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        <Row lg={4} md={3} sm={2} xs={1} className="tours-container text-start">
          {tours.map((tour) => (
            <Tour key={tour._id} tour={tour}></Tour>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Tours;
