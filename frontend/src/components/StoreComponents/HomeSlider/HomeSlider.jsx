import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/effect-creative";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './HomeSlider.scss';

export const HomeSlider = () => {
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      speed={1200}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      className="home-slider"
    >
      <SwiperSlide className="home-slider__item">
        <img src="/img/slide-1.jpg" alt="slide"/>
        <div className="home-slider__item__text">
          <div className="home-slider__item__text--inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-slider__item">
        <img src="/img/slide-6.jpg" alt="slide"/>
        <div className="home-slider__item__text">
          <div className="home-slider__item__text--inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-slider__item">
        <img src="/img/slide-2.jpg" alt="slide"/>
        <div className="home-slider__item__text">
          <div className="home-slider__item__text--inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-slider__item">
        <img src="/img/slide-5.jpg" alt="slide"/>
        <div className="home-slider__item__text">
          <div className="home-slider__item__text--inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-slider__item">
        <img src="/img/slide-3.jpg" alt="slide"/>
        <div className="home-slider__item__text">
          <div className="home-slider__item__text--inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-slider__item">
        <img src="/img/slide-4.jpg" alt="slide"/>
        <div className="home-slider__item__text">
          <div className="home-slider__item__text--inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};