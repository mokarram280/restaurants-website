import React from 'react';
import { MdRestaurant, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { TbBrowserShare, TbBrandWhatsappFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTikTok } from "react-icons/ai";

const MoreInfo = () => {
  return (
    <section className='w-[80%] mx-auto mt-24 flex flex-col md:flex-row items-center gap-y-12'>
        <div className='w-full md:w-1/2'>
            <h2 className='text-4xl font-bold'>More informations</h2>
            <div className='space-y-5 mt-8'>
            <div className='flex items-center gap-4'>
                <MdRestaurant size={20} />
                <p className='text-xl underline'>See the menu</p>
            </div>
            <div className='flex items-center gap-4'>
                <MdPhoneInTalk size={20} />
                <p className='text-xl'>+847 87 37 29 01</p>
            </div>
            <div className='flex items-center gap-4'>
                <MdLocationOn size={20} />
                <p className='text-xl'>Singapour, Bishan</p>
            </div>
            <div className='flex items-center gap-4'>
                <GoClockFill size={20} />
                <p className='text-xl'>7j/7, 08:00 - 22:00</p>
            </div>
            <div className='flex items-center gap-4'>
                <TbBrowserShare size={20} />
                <p className='text-xl underline'>www.bellaitalia.com</p>
            </div>
            </div>
            <div className='flex items-center gap-4 mt-7'>
                <FaFacebook size={25} />
                <RiInstagramFill size={25} />
                <AiOutlineTikTok size={25} />
                <TbBrandWhatsappFilled size={25} />
            </div>
        </div>
        <div className='w-full md:w-1/2'>
            <img src="/map2.png" alt="" />
        </div>
    </section>
  );
};

export default MoreInfo;