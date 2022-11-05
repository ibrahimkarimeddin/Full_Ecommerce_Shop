import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectFade } from 'swiper';

    const IMages = [
        {
          id:1,
            src:'/swiperImage/image.jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg'    
        },
        {
          id:2,
            src:'/swiperImage/image2.jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg'
        },
        {
          id:3,
            src:'/swiperImage/image3..jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg'
        }
    ]
function SwiperBannerSection() {

  return (
    <section className='relative bg-gray-50'>
         <Swiper
   
    modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay ,EffectFade]}
    centeredSlides={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
      spaceBetween={0}
      slidesPerView={1}
      
      onSlideChange={() => ""}
      onSwiper={(swiper) => ""}
    >
        {
            IMages.map((image , i)=>(
                <span className='relative' key={image.id}>
                <SwiperSlide  key={image.id}><img   className={image.className} src={image.src} alt="swiper_image"/></SwiperSlide>
                
                </span>
            ))
        }
 
   
    </Swiper>
    </section>
   
  )
}

export default SwiperBannerSection