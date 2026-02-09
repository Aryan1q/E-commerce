import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import TypewriterHeading from './TypewriterHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import hero_image from '../Assets/hero_image.jpg'

import product_4 from '../Assets/product_4.png';
import product_2 from '../Assets/product_2.png';
import product_3 from '../Assets/product_3.png';

export const Hero = () => {
  return (
    <div className='hero'>
      {/* Left Section */}
      <div className="hero-left">
        <div>
          <TypewriterHeading />
        </div>

        <div className="hero-impact-message">
          <p>Each kurti feeds a child — your kindness wrapped in fabric.</p>
        </div>

        <div className='Collection'>
          <p>Collections</p>
          <p>For Every Queen and Princess ❤️</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>

      {/* Right Section (Swiper) */}
      <div className="hero-right">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >

        <SwiperSlide>
        <img src={hero_image} alt='' />
        </SwiperSlide>
          <SwiperSlide>
            <img src={product_4} alt="Kurti 1" className='hero-kurti' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product_2} alt="Kurti 2" className='hero-kurti' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product_3} alt="Kurti 3" className='hero-kurti' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
