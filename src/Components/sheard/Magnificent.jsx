import React from 'react';
import { ImageGallery } from './chain';

const Magnificent = () => {
  return (
    <div className='w-[80%] mx-auto mt-32'>
        <h2 className='text-4xl font-bold'>Discover our magnificent place in photos</h2>
        <p className='text-foreground max-w-[601px] mt-3'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
            {ImageGallery.map(({gallery},i)=>(
                <div key={i} className={`${i === 0 ? 'lg:col-span-2' : ''} ${ i === 0 ? 'lg:row-span-2' : ''}`}>
                    <img src={gallery} alt="" className='w-full h-full' />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Magnificent;