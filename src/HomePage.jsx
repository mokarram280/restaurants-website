import React from 'react';
import Company from './Components/Company';
import CardSlider from './Components/CardSlider';
import LatestTrends from './Components/LatestTrends';
import CoolRestaurants from './Components/CoolRestaurants';
import Activities from './Components/Activities';

const HomePage = () => {
  return (
    <>
        <Company />
        <CardSlider />
        <LatestTrends />
        <CoolRestaurants />
        <Activities />
    </>
  );
};

export default HomePage;