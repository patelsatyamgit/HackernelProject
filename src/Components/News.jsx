import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { newsData } from '../utils/NewsData';


const News = () => {
  return (
    <div className='h-[1080px] bg-[rgb(18,17,17)] py-[150px]'>

        <h1 className='text-[#A0A2A3] text-4xl ml-[350px]'>News</h1>

        <div className='ml-[300px] py-40'>
            <Swiper loop={true}  slidesPerView={3}
        spaceBetween={30}>
              {
               newsData && newsData.map((item,index)=>(
                      <SwiperSlide key={index}>
                          <img src={item.image} alt="" className='w-[500px] h-[500px]' />
                          <p className='newstext'>{item.text}</p>
                          <div className='flex items-center gap-7 '>
                            <div className='w-[80px] h-1 bg-[#A0A2A3]'></div>
                            <p className='newstext'>{item.date}</p>
                          </div>
                      </SwiperSlide>
               )

                )
              }
            </Swiper>

        </div>

    </div>
  )
}

export default News;