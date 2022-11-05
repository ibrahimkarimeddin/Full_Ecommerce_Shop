import React from 'react'
import { Button } from 'reactstrap'
import {TiArrowLeftOutline} from 'react-icons/ti'
import SwiperLastAdd from './SwiperLastAdd'
function LastAdd() {
  return (
    <section className='mt-10 mx-3 h-screen bg-gray-50 p-3 '>
            <div className='flex justify-between mb-4'>
                <Button className='bg_primary border-none'>Show All Product</Button>
                <div className='flex items-center'>
                    <div>
                        <p className='secondary font-bold text-lg mr-3'>
                            Last Added
                        </p>
                        <p className='text-sm'>
                            {`{103 Product}`}
                        </p>
                    </div>
                    <div>
                        <TiArrowLeftOutline  className='text-3xl primary'/>
                    </div>
                </div>
            </div>
            <SwiperLastAdd />
    </section>
  )
}

export default LastAdd