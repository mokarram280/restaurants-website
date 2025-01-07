import React from 'react';

const Carousels = (props,i) => {
  return (
    <div>
        <div key={i} className='w-[285px] h-[373px] bg-background rounded-xl mt-7'>
                <img src={props.imgs} alt="" />
            <div className='py-2 px-4'>
            <div className='space-y-1'>
                <h3 className='text-xl font-semibold'>{props.locations}</h3>
                <p className='text-sm text-foreground max-w-[234px]'>{props.description}</p>
            </div>
            <div className='flex items-center mt-6 gap-2'>
                <img src={props.star} alt="" />
                <p className='text-sm text-foreground'><span className='font-bold text-black'>{props.ratings}</span>{props.reviews}</p>
            </div> 
          </div>  
        </div>
    </div>
  );
};

export default Carousels;