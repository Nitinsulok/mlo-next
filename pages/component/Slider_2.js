import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider_brands() {
    return (
        <div>
           <h4 className='fs-4 ms-5 my-3'>Top deals</h4>
            <Swiper
                modules={[Navigation,   A11y]}
                spaceBetween={50}
                slidesPerView={6}
                className="px-5 my-3 slider_brands"
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img className='img-fluid' src='/img/brands/brand_1.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/brands/brand_2.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/brands/brand_3.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/brands/brand_4.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/brands/brand_5.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src="/img/brands/brand_6.png"></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/brands/brand_2.png'></img></SwiperSlide>
                ..
            </Swiper>
        </div>
    )
}
