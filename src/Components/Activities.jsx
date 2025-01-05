import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { CafeCard } from './sheard/chain';

const Activities = () => {
  return (
    <section className='pt-10 lg:pt-20 pb-6 lg:pb-16 px-6 lg:px-12'>
        <h2 className='text-xl xl:text-[32px] font-extrabold text-center lg:text-start'>Recents activities</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3'> 
                {CafeCard.map((items,i)=>(
                    <div key={i} className='bg-background rounded-[14px] py-6 px-3 mt-3'>
                    <div className='flex items-center gap-4'>
                    <button className='w-14 h-14 bg-white rounded-full flex items-center
                    justify-center'><IoPersonOutline size={30} /></button>
                    <div>
                        <h3 className='text-xl font-semibold'>{items.names}</h3>
                        <p className='text-[16.5px]'>{items.address}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 mt-6 mb-5'>
                    <img src={items.iconImg} alt="" />
                    <p>{items.date}</p>
                </div>
                 <p className='text-[16px] text-foreground'>{items.text}</p>
                 <p className='text-[16px] text-foreground mt-3'>{items.text2}</p>
                 <div className='flex items-center gap-3 mt-10'>
                {items.cafeImg.map((imgs,i)=>(
                    <div key={i}><img src={imgs.img} alt="" /></div>
                ))}
                 </div>
                 <p className='mt-5 text-[17px] font-medium underline'>{items.discover}</p>
                    </div>
                ))}
            </div>
    </section>
  );
};

export default Activities;