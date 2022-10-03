import React from 'react';
import Image from 'next/image';

import { Col, Container, Row } from 'react-grid-system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
const Suponsers = () => {
  return (
    <Container>
      <Row>
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
          <SwiperSlide>
            <img src='/image 1.png' alt='' style={{ width: '100%' }} />
          </SwiperSlide>

          <SwiperSlide>
            <img src='/image 2.png' alt='' style={{ width: '100%' }} />
          </SwiperSlide>

          <SwiperSlide>
            <img src='/image 3.png' alt='' style={{ width: '100%' }} />
          </SwiperSlide>

          <SwiperSlide>
            <img src='/image 4.png' alt='' style={{ width: '100%' }} />
          </SwiperSlide>
        </Swiper>
      </Row>
    </Container>
  );
};

export default Suponsers;
