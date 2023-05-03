import React from 'react';
import Footer from '../../Footer/Footer';
import Slider from '../../Slider/Slider';
import TopDestination from '../../TopDestination/TopDestination';
import TourStyle from '../../TourStyle/TourStyle';
import Tours from '../Tours/Tours';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Tours></Tours>
      <TopDestination></TopDestination>
      <TourStyle></TourStyle>
    </div>
  );
};

export default Home;
