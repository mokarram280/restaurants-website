import React from 'react';
import Carousels from './Carousels';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const AllCard = () => {
  return (
    
    <div>
     <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          412: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1330: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
        <Carousels
        imgs='img1.png'
        locations='Bottega'
        description='The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        star='star.svg'
        ratings='5.0'
        reviews='(876 reviews)'
        /></SwiperSlide>
        <SwiperSlide>
        <Carousels
        imgs='img2.png'
        locations='Bottega'
        description='The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        star='star.svg'
        ratings='5.0'
        reviews='(876 reviews)'
        />
        </SwiperSlide>
        <SwiperSlide>
        <Carousels
        imgs='img3.png'
        locations='Bottega'
        description='The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        star='star.svg'
        ratings='5.0'
        reviews='(876 reviews)'
        />
        </SwiperSlide>
        <SwiperSlide>
        <Carousels
        imgs='img4.png'
        locations='Bottega'
        description='The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        star='star.svg'
        ratings='5.0'
        reviews='(876 reviews)'
        />
        </SwiperSlide>
        <SwiperSlide>
        <Carousels
        imgs='img1.png'
        locations='Bottega'
        description='The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        star='star.svg'
        ratings='5.0'
        reviews='(876 reviews)'
        />
        </SwiperSlide>
        <SwiperSlide>
        <Carousels
        imgs='img2.png'
        locations='Bottega'
        description='The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        star='star.svg'
        ratings='5.0'
        reviews='(876 reviews)'
        />
        </SwiperSlide>
      </Swiper>   
    </div>
  );
};

export default AllCard;