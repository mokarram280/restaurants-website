import React from 'react';
import {Slider} from "@nextui-org/react";

const Ratings = () => {
  return (
    <section className='w-[80%] mx-auto border-t border-t-gray-200 border-b border-b-gray-200 mt-12'>
        <div className='flex flex-col md:flex-row gap-[52px] my-14'>
            <div className='flex items-start gap-4'>
                <img src="/tagstar.png" alt="" />
                <div className='space-y-2'>
                    <h2 className='text-3xl font-bold'>Overall rating</h2>
                    <p className='text-lg text-foreground pb-7'>834 Reviews</p>
                    <img src="/star5.svg" alt="" />
                </div>
            </div>
            <div className='w-[80%]'>
            <div>
                <Slider
                startContent='5_stars'
                defaultValue={1}
                maxValue={1}
                minValue={0}
                step={0.01}
                hideThumb={true}
                />
            </div>
            <div>
                <Slider
                startContent='0_stars'
                defaultValue={0.7}
                maxValue={1}
                minValue={0}
                step={0.01}
                hideThumb={true}
                />
            </div>
            <div>
                <Slider
                startContent='0_stars'
                defaultValue={0.5}
                maxValue={1}
                minValue={0}
                step={0.01}
                hideThumb={true}
                />
            </div>
            <div>
                <Slider
                startContent='0_stars'
                defaultValue={0.3}
                maxValue={1}
                minValue={0}
                step={0.01}
                hideThumb={true}
                />
            </div>
            <div>
                <Slider
                startContent='0_stars'
                defaultValue={0.2}
                maxValue={1}
                minValue={0}
                step={0.01}
                hideThumb={true}
                />
            </div>
            </div>
        </div>
    </section>
  );
};

export default Ratings;