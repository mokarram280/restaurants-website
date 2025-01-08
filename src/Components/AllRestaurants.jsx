import React from 'react';
import { FiBarChart } from "react-icons/fi";
import { BsArrowsVertical } from "react-icons/bs";
import NavbarArea from '../../../src/Components/NavbarArea';
import { Link } from 'react-router-dom';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const BestRestaurants = [
    {
        mainImg:'restu1.png',
        names:'The snug',
        desc:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        icon:'star4.75.svg',
        rating:'4.5',
        review:'(654 reviews)'
    },
    {
        mainImg:'restu2.png',
        names:'Bottega',
        desc:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        icon:'star5.svg',
        rating:'5.0',
        review:'(1654 reviews)'
    },
    {
        mainImg:'restu3.png',
        names:'Little Shucker',
        desc:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        icon:'star3.5.svg',
        rating:'3.0',
        review:'(553 reviews)'
    },
    {
        mainImg:'restu4.png',
        names:'Lokma',
        desc:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        icon:'star4.75.svg',
        rating:'4.5',
        review:'(654 reviews)'
    },
    {
        mainImg:'restu5.png',
        names:'Starbelly',
        desc:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        icon:'star4.5.svg',
        rating:'4.5',
        review:'(654 reviews)'
    },
    {
        mainImg:'restu6.png',
        names:'The melt',
        desc:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        icon:'star4.5.svg',
        rating:'4.5',
        review:'(654 reviews)'
    },
    {
        mainImg:'restu7.png',
        names:'Arabia Nights',
        desc:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        icon:'star4.5.svg',
        rating:'4.5',
        review:'(654 reviews)'
    }
];


const AllRestaurants = () => {
  return (
    <>
      <NavbarArea />
        <div className='flex flex-col md:flex-row justify-between gap-12 my-12'>
            <div className='lg:ps-[100px] w-full lg:w-1/2 mx-8 lg:mx-0'>
                <h3 className='text-md font-bold mt-5'><Link to='/homepage'><button className='hover:text-accent'>Home</button> </Link>/ All restaurants</h3>
                <div className='flex items-baseline gap-5'>
                    <h2 className='text-3xl font-extrabold mt-3'>best restaurants in singapore</h2>
                    <Dropdown>
                        <DropdownTrigger>
                        <Button className='border border-gray-400 w-24 h-10 rounded-full flex items-center justify-center'> <FiBarChart className='translate rotate-90' /> <BsArrowsVertical />Sort</Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>All feedbacks</DropdownItem>
                            <DropdownItem>Highest rated</DropdownItem>
                            <DropdownItem>oldest rated</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>   
                </div>
                    <div className='pt-12'>
                    {BestRestaurants.map((items,i)=>(
                        <div key={i} className='flex gap-4 p-4 border-b border-b-gray-200'>
                        <img src={items.mainImg} alt="" />
                        <div className='space-y-3'>
                            <h4 className='text-xl font-bold'>{items.names}</h4>
                            <p className='text-[16px] text-foreground max-w-[280px]'>{items.desc}</p>
                            <div className='flex gap-3 pt-5'>
                                <img src={items.icon} alt="" />
                                <p className='text-foreground'><span className='text-[15.5px] font-bold text-black'>{items.rating}</span>{items.review}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <button className='w-[175px] h-[47px] bg-accent rounded-full text-white mt-14 mb-16'>Show more</button>
            </div>
            <div className='w-full lg:w-1/2 mx-8 lg:mx-0'>
                <img src="/map.png" alt="" />
            </div>
        </div>
    </>
  );
};

export default AllRestaurants;