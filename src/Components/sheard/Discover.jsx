import React from 'react';
import { DiscoverCard } from './chain';

const Discover = () => {
  return (
    <section className='w-[80%] mx-auto mt-10 mb-20'>
        <h2 className='text-xl lg:text-[32px] font-extrabold text-center md:text-start'>Also discover...</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {DiscoverCard.map((item,i)=>(
          <div key={i} className='bg-background w-[319px] h-[412px] rounded-2xl mt-11'>
          <img src={item.disimg} alt="" />
          <div className='px-3'>
          <h3 className='text-lg lg:text-[22px] font-bold my-3'>{item.disname}</h3>
          <p className='text-foreground max-w-[280px]'>{item.distext}</p>
          <div className='flex items-center gap-3 mt-7'>
              <img src={item.disicon} alt="" />
              <p className='text-foreground'> <span className='font-bold text-black'>{item.disrating}</span> {item.disreview}</p>
          </div>
        </div>
      </div>
        ))}
      </div> 
    </section>
  );
};

export default Discover;