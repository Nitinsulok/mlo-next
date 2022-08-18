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
                <SwiperSlide><img className='img-fluid' src='/img/slider/restaurant.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/slider/spa.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/slider/fast-food.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/slider/restaurant.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/slider/gift.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/slider/hair-spa.png'></img></SwiperSlide>
                <SwiperSlide><img className='img-fluid' src='/img/slider/dinner.png'></img></SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}
