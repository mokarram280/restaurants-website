import React from 'react';

const Company = () => {
    const CompanyList = [
        {img:'vector1.svg',title:'All'},
        {img:'vector12.svg',title:'Restaurants'},
        {img:'vector2.svg',title:'Hotels'},
        {img:'vector3.svg',title:'Home services'},
        {img:'vector4.svg',title:'Shopping'},
        {img:'vector5.svg',title:'Car location'},
        {img:'vector8.svg',title:'Beauty & Spa'},
        {img:'vector9.svg',title:'Park'},
        {img:'vector6.svg',title:'museum'},
        {img:'vector10.svg',title:'Car wash'},
        {img:'vector7.svg',title:'Bars'},
        {img:'vector11.svg',title:'Gyms'},
    ]
  return (
    <section>
        <div className='pt-5 lg:pt-10 pb-10 lg:pb-[71px]'>
            <div className='grid grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-0'>
                {CompanyList.map((item,i)=>(
                    <div key={i} className='flex flex-col items-center space-y-1 lg:space-y-2'>
                        <img src={item.img} alt="" className='w-6 h-6' />
                        <p className='text-[#AFAFAF] text-[10px] lg:text-sm text-center'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Company;