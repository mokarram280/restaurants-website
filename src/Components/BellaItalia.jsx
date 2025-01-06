import React from 'react';
import NavbarArea from './NavbarArea';
import Footer from './Footer';
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import Magnificent from './sheard/Magnificent';
import MoreInfo from './sheard/MoreInfo';

const BellaItalia = () => {
  return (
    <>
    <NavbarArea />
        <div>
            <h3 className='text-md font-bold my-5 ms-[100px]'>Home / BellaItalia</h3>
            <div className='bg-[url(/bg.png)] bg-no-repeat bg-cover relative'>
              <div className='ps-24 pt-16 pb-28'>
              <h2 className='text-[52px] font-bold text-white'>Bella italia</h2>
              <div className='flex items-center gap-3'>
                <img src="star5.svg" alt="" />
                <h5 className='text-white'><span className='font-bold'>5.0</span> (834 reviews)</h5>
                </div>
                <p className='text-lg text-white mt-7 max-w-[528px]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
              <div className='mt-16 space-y-9 text-lg text-white'>
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
              <div className='absolute left-1/2 -bottom-20'><img src="/tag.svg" alt="" /></div>
            </div>
        </div>
        <div>
            <Magnificent />
        </div>
        <div>
            <MoreInfo />
        </div>
    <Footer />
    </>
  );
};

export default BellaItalia;