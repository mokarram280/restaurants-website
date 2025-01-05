import React from 'react';
import { CiSearch } from 'react-icons/ci';

const DoubleSearchBar = () => {
    
  return (
    <div className=''>
        <div className='flex items-center border border-gray-400 w-[425px] lg:w-[625px] h-[30px] lg:h-[51px] rounded-full relative py-4 px-6'>
            <input type="text" placeholder='restaurant....'  className='lg:ms-2 border-r border-r-gray-400 lg:w-64 focus:outline-0' />
            <input type="text" placeholder='locations....' className='ms-3 lg:ms-6 focus:outline-0' />
    
            <button className='absolute right-1 lg:bottom-0.5 bg-accent w-6 lg:w-11 h-6 lg:h-11 rounded-full flex items-center justify-center text-white'><CiSearch /></button>
        </div>
    </div>
  );
};

export default DoubleSearchBar;