import React from 'react';
import Company from './Components/Company';
import CardSlider from './Components/CardSlider';
import LatestTrends from './Components/LatestTrends';
import CoolRestaurants from './Components/CoolRestaurants';
import Activities from './Components/Activities';
import NavbarArea from './Components/NavbarArea';
import Footer from './Components/Footer';

const HomePage = () => {
  return (
    <>
        <NavbarArea />
        <Company />
        <CardSlider />
        <LatestTrends />
        <CoolRestaurants />
        <Activities />
        <Footer />
    </>
  );
};

export default HomePage;