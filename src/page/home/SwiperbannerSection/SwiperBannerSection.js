import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';


function SwiperBannerSection() {
  return (
    <Swiper
   
    modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
      spaceBetween={0}
      slidesPerView={1}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='/swiperImage/image.jpg ' alt="swiper_image" className='mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg' /></SwiperSlide>
      <SwiperSlide><img src='/swiperImage/image2.jpg ' alt="swiper_image" className='mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg' /></SwiperSlide>
      <SwiperSlide><img src='/swiperImage/image3..jpg ' alt="swiper_image" className='mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg' /></SwiperSlide>

      
    </Swiper>
  )
}

export default SwiperBannerSection