import React from 'react';
  import { CiGlobe } from "react-icons/ci";
import DoubleSearchBar from './DoubleSearchBar';

const NavbarArea = () => {
  return (
    <nav className='pt-6 pb-3 border-b'>
     <div className='flex flex-col xl:flex-row items-center justify-between gap-3 mx-12'>
     <div>
        <img src="/logo.png" alt="" className='' />
      </div>

    <div>
      <DoubleSearchBar />
    </div>
    <div className='flex items-center gap-4'>
    <CiGlobe size={25} />
    <button className='bg-black rounded-full text-white w-[233px] h-[47px]'>MyFeedback for business</button>
    </div>
     </div>
  </nav>
  );
};

export default NavbarArea;