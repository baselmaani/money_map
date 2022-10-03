import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
function ClientsSlider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='mySwiper'
    >
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}

export default ClientsSlider;
