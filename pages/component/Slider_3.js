import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/mousewheel";
import "swiper/css/bundle";
import { Mousewheel } from 'swiper';

export default function Slider_Other() {
    return (
        <div>
            <div className='main ms-5 mt-4'>
                <h6 className='mb-3 fs-6'>Other</h6>
            </div>
            <Swiper
                modules={[Mousewheel]}
                spaceBetween={50}
                slidesPerView={7}
                className="px-5 my-4"
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src='/img/other/pic.1.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.2.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.3.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.4.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.5.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.6.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.7.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.1.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.2.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.5.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.3.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/other/pic.4.png'></img></SwiperSlide>
            </Swiper>
        </div>
    )
}