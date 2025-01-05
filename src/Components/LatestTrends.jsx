import React from 'react';
import { chain } from './sheard/chain';

const LatestTrends = () => {
  return (
    <section className='mx-8'>
        <div className='pt-24 pb-14'>
            <h2 className='text-3xl font-extrabold lg:ms-4 text-center lg:text-start'>The latest trends</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
                {chain.map((items,i)=>(
                    <div key={i} className='w-[285px] :h-[363px] bg-background rounded-xl mt-7'>
                    <img src={items.imgs} alt="" />
                <div className='py-2 px-4'>
                <div className='space-y-1'>
                    <h3 className='text-xl font-semibold'>{items.locations}</h3>
                    <p className='text-sm text-foreground max-w-[234px]'>{items.description}</p>
                </div>
                <div className='flex items-center mt-6 gap-2'>
                    <img src={items.star} alt="" />
                    <p className='text-sm text-foreground'><span className='font-bold text-black'>{items.ratings}</span> {items.reviews}</p>
                </div> 
              </div>  
            </div>
                ))}
       </div>
     </div>
    </section>
  );
};

export default LatestTrends;