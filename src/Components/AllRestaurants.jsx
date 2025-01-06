import React from 'react';
import { FiBarChart } from "react-icons/fi";
import { BsArrowsVertical } from "react-icons/bs";

const AllRestaurants = () => {
  return (
    <section>
        <div>
            <div className='ps-[100px]'>
                <h3 className='text-md font-bold mt-5'>Home / All restaurants</h3>
                <div className='flex items-baseline gap-7'>
                    <h2 className='text-3xl font-extrabold mt-3'>best restaurants in singapore</h2>
                    <button className='border border-gray-400 w-24 h-11 rounded-full flex items-center justify-center'> <FiBarChart className='translate rotate-90' /> <BsArrowsVertical />Sort</button>
                </div>
                <div className='flex gap-4'>
                    <img src="/card13.png" alt="" />
                    <div className='space-y-3'>
                        <h4 className='text-xl font-bold'>The snug</h4>
                        <p className='text-[16px] text-foreground max-w-[280px]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                        <div className='flex gap-3 pt-5'>
                            <img src="/star5.svg" alt="" />
                            <p className='text-foreground'><span className='text-[15.5px] font-bold text-black'>4.5</span> (654 reviews)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>map</div>
        </div>
    </section>
  );
};

export default AllRestaurants;