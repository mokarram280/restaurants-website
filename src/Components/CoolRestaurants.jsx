import React from 'react';

const CoolRestaurants = () => {
  return (
    <section>
        <div className='flex flex-col items-center space-y-5'>
            <h3 className='text-[22px]'>Discover more cool restaurants</h3>
            <button className='w-[175px] h-[47px] rounded-full bg-accent text-white'>Show more</button>
        </div>       
        <div className='bg-background flex flex-col-reverse md:flex-row items-center justify-center mt-10 lg:mt-20'>
          <div className='w-full lg:w-1/2 lg:ps-48 px-8 lg:mx-0'>
            <div className='space-y-3 lg:space-y-7'>
            <h2 className='text-lg md:text-xl xl:text-[26px] font-bold lg:font-extrabold'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h2>
            <p className='text-[16px] text-foreground lg:max-w-[453px]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
            </div>
            <button className='w-[296px] h-[52px] bg-black text-white rounded-full mt-6 xl:mt-16'>Explore MyFeedback business</button>
          </div>
          <div className='w-full lg:w-1/2 md:pe-20 lg:pe-48 py-6 px-8 lg:px-0'>
          <img src="/cool.png" alt="" />
          </div>
        </div>
    </section>
  );
};

export default CoolRestaurants;