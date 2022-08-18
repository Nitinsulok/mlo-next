import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/mousewheel";
import "swiper/css/bundle";
import { Mousewheel } from 'swiper';

export default function Slider() {
    return (
        <div>
            <Swiper
                modules={[Mousewheel]}
                spaceBetween={50}
                slidesPerView={7}
                className="px-5"
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src='/img/slider/dinner.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/fast-food.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/gift.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/hair-saloon.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/hair-spa.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/restaurant.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/spa.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/fast-food.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/restaurant.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/gift.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/hair-spa.png'></img></SwiperSlide>
                <SwiperSlide><img src='/img/slider/dinner.png'></img></SwiperSlide>
            </Swiper>
        </div>
    )
}