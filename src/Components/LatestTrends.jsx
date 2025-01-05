import React from 'react';

const LatestTrends = () => {
  return (
    <section className='mx-8'>
        <div>
            <h2 className='text-3xl font-extrabold'>The latest trends</h2>
            <div>
            <div className='w-[285px] h-[373px] bg-background rounded-xl mt-7'>
                <img src='' alt="" />
            <div className='py-2 px-4'>
            <div className='space-y-1'>
                <h3 className='text-xl font-semibold'></h3>
                <p className='text-sm text-foreground max-w-[234px]'></p>
            </div>
            <div className='flex items-center mt-6 gap-2'>
                <img src='' alt="" />
                <p className='text-sm text-foreground'><span className='font-bold text-black'></span></p>
            </div> 
          </div>  
        </div>
       </div>
     </div>
    </section>
  );
};

export default LatestTrends;