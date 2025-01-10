import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from "react-icons/io";
import { data } from './sheard/chain';
import { Link } from 'react-router-dom';


const DoubleSearchBar = () => {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const handleChange = e => {
      setSearch(e.target.value)
    }
    const handleClose = () => {
      setSearch("")
      setSearchData([])
    }
    useEffect(()=>{
      if (search !== ""){
        const newFilterData = data.filter(book =>{
          return book.title.includes(search)
        })
        setSearchData(newFilterData)
      }
    },[search])
  return (
    <div>
        <div className='flex items-center border border-gray-400 w-[425px] lg:w-[625px] h-[30px] lg:h-[51px] rounded-full relative py-4 px-6'>
        <input onChange={handleChange} value={search} type="text" placeholder='restaurant....'  className='lg:ms-2 border-r border-r-gray-400 lg:w-64 focus:outline-0' />
        <input onChange={handleChange} value={search} type="text" placeholder='locations....' className='ms-3 lg:ms-6 focus:outline-0' />

        <button onChange={handleChange} value={search} className='absolute right-1 lg:bottom-0.5 bg-accent w-6 lg:w-11 h-6 lg:h-11 rounded-full flex items-center justify-center text-white'>
          {
            search === "" ? (<CiSearch />) : (<IoIosClose onClick={handleClose} />)
          }
          </button>
        <Link to='/allrestaurants'><div className='bg-white px-8 shadow-lg mt-[250px]'>
          {searchData.map((data,i)=>(
            <a href={data.title} key={i}>
              {data.title}
            </a>
          ))}
        </div></Link>
      </div>   
    </div>
  );
};

export default DoubleSearchBar;