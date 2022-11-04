import React from 'react'
import LastAdd from './lastAddSection/LastAdd'
import SwiperBannerSection from './SwiperbannerSection/SwiperBannerSection'

function HomePage() {
  return (
    <main className='max-w-5xl   mx-auto h-screen'>
        <SwiperBannerSection/>
        <LastAdd/>
    </main>
  )
}

export default HomePage