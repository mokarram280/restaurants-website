import React from 'react';
import { FiBarChart } from "react-icons/fi";
import { BsArrowsVertical } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FilterCard } from './chain';

const Filter = () => {
  return (
    <section className='w-[80%] mx-auto mt-9'>
        <div>
            <div className='flex items-center gap-5'>
            <button className='border border-gray-400 w-24 h-10 rounded-full flex items-center justify-center gap-2'> <IoFilter size={20} />Filter</button>
            <button className='border border-gray-400 w-24 h-10 rounded-full flex items-center justify-center'> <FiBarChart className='translate rotate-90' /> <BsArrowsVertical />Sort</button>
            </div>
                <div className='mt-11 space-y-5'>
                    {FilterCard.map((items,i)=>(
                        <div key={i} className='flex gap-2 md:w-[1055px] bg-background rounded-[20px] p-5'>
                          <p className='w-6 md:w-14 h-6 md:h-14 bg-white rounded-full flex items-center justify-center'><GoPerson md:size={20} /></p>
                        <div>
                          <h3 className='text-lg md:text-[21px] font-bold'>{items.person}</h3>
                          <p className='text-[16.5px] text-foreground'>{items.locat}</p>
                        <div className='flex items-center gap-3 mt-1 md:mt-3'>
                          <img src={items.staricon} alt="" />
                          <p>{items.dates}</p>
                        </div>
                        <p className='text-foreground mt-4 md:mt-7 md:max-w-[511px]'>{items.txt}</p>
                      </div>
                    </div>
                    ))}
                </div>
            </div>
    </section>
  );
};

export default Filter;