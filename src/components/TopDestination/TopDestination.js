import React from 'react';
import './TopDestination.css'
import france from '../../images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg'
import australia from '../../images/caleb-russell-mKwBMtDSZes-unsplash.jpg'
import toronto from '../../images/mwangi-gatheca-qlKaN7eqay8-unsplash.jpg'
import malayasia from '../../images/matiinu-ramadhan-JniyqE9f1uk-unsplash.jpg'


import { Col, Container, Row } from 'react-bootstrap';

const TopDestination = () => {
    return (

        <Container className="top-destination-container">
            <hr />
            <div className="my-5">
                <h2 className="text-warning ">Top Destinations</h2>
                <p>“Put a ding in the universe”</p>
            </div>
            <Row lg={2} md={2} sm={1} xs={1}>
                <Col>
                    <Row className="top-destination-img">
                        <Col >
                            <img width="100%" src={malayasia} alt="" />
                            <p></p>
                        </Col>
                        <Col >
                            <Row>
                                <Col> <img width="100%" height="100%" img-fluid src={australia} alt="" /></Col>
                                <Col> <img width="100%" height="100%" img-fluid src={toronto} alt="" /></Col>
                                <p></p>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col>
                    <img width="100%" img-fluid src={france} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default TopDestination;