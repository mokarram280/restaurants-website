import React from 'react';
import NavbarArea from './NavbarArea';
import Footer from './Footer';
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import Magnificent from './sheard/Magnificent';
import MoreInfo from './sheard/MoreInfo';
import Ratings from './sheard/Ratings';
import Filter from './sheard/Filter';
import { Link } from 'react-router-dom';
import Discover from './sheard/Discover';

const BellaItalia = () => {
  return (
    <>
    <NavbarArea />
        <div>
            <h3 className='text-md font-bold my-5 text-center md:text-start xl:ms-[100px]'><Link to='/homepage'><button className='hover:text-accent'>Home</button></Link> / BellaItalia</h3>
            <div className='bg-bannerImg bg-no-repeat bg-cover relative'>
            <div className='bg-gradient-to-r from-[#101010]/85 lg:w-[50%]'>
              <div className='lg:ps-24 pt-6 lg:pt-16 pb-16 lg:pb-28 mx-8 '>
              <h2 className='text-4xl lg:text-[52px] font-bold text-white'>Bella italia</h2>
              <div className='flex items-center gap-3 mt-4 lg:mt-6'>
                <img src="star5.svg" alt="" />
                <h5 className='text-white'><span className='font-bold'>5.0</span> (834 reviews)</h5>
                </div>
                <p className='text-lg text-white mt-4 lg:mt-7 lg:max-w-[528px]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
              <div className='mt-6 lg:mt-16 space-y-4 lg:space-y-9 text-lg text-white'>
                <div className='flex items-center gap-2'>
                    <FaLocationDot size={20} />
                    <p>Singapour, Bishan-Ang Mo Kio Park </p>
                </div>
                <div className='flex items-center gap-2'>
                    <GoClockFill size={20} />
                    <p>7j/7, 08:00 - 22:00</p>
                </div>
              </div>
              </div>
              <div className='absolute left-1/3 lg:left-1/2 -bottom-20'><img src="/tag.svg" alt="" className='w-28 lg:w-full' /></div>
            </div>
            </div>
        </div>
        <div>
            <Magnificent />
            <MoreInfo />
            <Ratings />
          <Filter />
          <Discover />
          </div>
    <Footer />
    </>
  );
};

export default BellaItalia;