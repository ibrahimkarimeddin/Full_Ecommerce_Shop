import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectFade } from 'swiper';

    const IMages = [
        {
            src:'/swiperImage/image.jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg'    
        },
        {
            src:'/swiperImage/image2.jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg'
        },
        {
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
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            IMages.map((image , i)=>(
                <span className='relative'>
                <SwiperSlide><img   className={image.className} src={image.src} alt="swiper_image"/></SwiperSlide>
                
                </span>
            ))
        }
 
   
    </Swiper>
    </section>
   
  )
}

export default SwiperBannerSection