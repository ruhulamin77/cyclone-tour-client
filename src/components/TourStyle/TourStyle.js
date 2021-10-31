import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TourStyle.css'

const TourStyle = () => {
    return (
        <div>
            <Container>
                <hr />
                <div className="my-5">
                    <h2 className="text-warning">Tour Style</h2>
                    <p>“The journey not the arrival matters”</p>
                </div>
                <Row md={3} xs={2} className="tour-style-icons mb-5">
                    <Col>
                        <i class="fas fa-biking"></i>
                        <p>MOUNT BIKING</p>
                    </Col>
                    <Col><i class="fas fa-hiking"></i>
                        <p>HIKING TRIPS</p></Col>
                    <Col><i class="fas fa-ship"></i>
                        <p>SHIP TRIPS</p></Col>
                    <Col><i class="fas fa-plane-departure"></i>
                        <p>PLAN TRIPS</p></Col>
                    <Col><i class="fas fa-bus"></i>
                        <p>BUS TRIPS</p></Col>
                    <Col><i class="fas fa-subway"></i>
                        <p>TRAIN TRIPS</p></Col>


                </Row>

            </Container>
        </div>
    );
};

export default TourStyle;