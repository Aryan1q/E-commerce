// Hero.jsx
import React from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import kurti1 from '../../Assets/kurti1.png';
import kurti2 from '../../Assets/kurti2.png';
import kurti3 from '../../Assets/kurti3.png';

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h2>FEEDING POOR CHILDREN<br />WITH EACH PURC</h2>
        <div className="hero-impact-message"> 
          <em>
            Each kurti feeds a child — your<br />
            kindness wrapped in fabric.
          </em>
        </div>
        <div className="Collection">
          <p>Collections</p>
          <p>For Every Queens and Princesses ❤️</p>
        </div>
        <div className="hero-latest-btn">Latest Collection ➝</div>
      </div>

      {/* Right Section with Swiper */}
      <div className="hero-right">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide><img src={kurti1} alt="Kurti 1" /></SwiperSlide>
          <SwiperSlide><img src={kurti2} alt="Kurti 2" /></SwiperSlide>
          <SwiperSlide><img src={kurti3} alt="Kurti 3" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
