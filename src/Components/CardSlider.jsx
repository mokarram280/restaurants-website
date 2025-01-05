import React from 'react';
import AllCard from './AllCard';

const CardSlider = () => {
  return (
    <>
    <section className='bg-accent mx-8 rounded-xl'>
        <div className='pt-5 px-14 pb-14'>
            <h2 className='text-3xl text-white'>Find the best restaurant ratings below</h2>
            <div>
                <AllCard />
            </div>
        </div>
    </section>
    </>
  );
};

export default CardSlider;