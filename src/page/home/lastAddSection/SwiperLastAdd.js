import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectFade } from 'swiper';
import Card from '../../../components/Card';

    const CardItemstems = [
        {
            src:'/swiperImage/image.jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg',
            name:"حليب طازج"    
        },
        {
            src:'/swiperImage/image2.jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg',
            name:"مكسرات" 
        },
        {
            src:'/swiperImage/image3..jpg ',
            className:'mx-auto w-[90vw] h-[25vh] md:w-[55vw] md:h-[55vh] rounded-lg',
            name:"منظفات منزلية " 
        },
    ]
function SwiperLastAdd() {

  return (
    <section className='relative'>
         <Swiper
   
    modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay ,EffectFade]}
    centeredSlides={true}
    autoplay={{
      delay: 2000,
      initialSlide: "2" ,
      disableOnInteraction: false,
      reverseDirection: "true"
    }}
      
    //   slidesPerView={2}
      breakpoints={{
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
         
      }}
      
      onSlideChange={() =>" console.log('slide change')"}
      onSwiper={(swiper) => "console.log(swiper)"}
    >
        {
            CardItemstems.map((carditem , i)=>(
                <SwiperSlide key={i}>
                    <Card  CardItems={carditem} />
                </SwiperSlide>
                
            ))
        }
 
   
    </Swiper>
    </section>
   
  )
}

export default SwiperLastAdd