import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './TourDetails.css'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';


const TourDetails = () => {
    const { user } = useAuth()
    const { tourId } = useParams()
    const [tour, setTour] = useState({})


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking successfull')
                    reset();
                };
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/tours/${tourId}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])



    return (
        <Container className="mb-5">
            <h2 className="text-warning py-5">Please Confirm Your Tour</h2>
            <div className="tour-details-container">
                <div className="card mb-3 tour-detail-info"  >
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={tour.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <h5 className="card-title">Place Name: {tour.name}</h5>
                                <p className="card-text">{tour.description}</p>
                                <span className="d-flex border">
                                    <b>{tour.duration}</b>
                                    <b className="ms-auto text-warning">$ {tour.price}</b>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="tour-detail-form">
                    <h4> Give us your details please</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("packageName", { required: true })} placeholder="Event Name" value={tour.name || ''} />
                        <input {...register("name", { required: true })} placeholder="Your Name" value={user.displayName || ''} />
                        <input {...register("email", { required: true })} placeholder="Your Name" value={user.email || ''} />

                        <textarea className="address-field" {...register("address", { required: true, maxLength: 100 })} placeholder="Your Address" />
                        <input type="number" {...register("phone")} placeholder="Phone Number" />
                        <input type="submit" className="btn btn-warning" value="Confirm Booking" />
                    </form>

                </div>
            </div>
        </Container>
    );
};

export default TourDetails;