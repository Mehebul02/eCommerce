'use client'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Pagination, Navigation } from 'swiper/modules';
import { GoArrowRight } from "react-icons/go";
import Container from '../../shared/Container';
import { banner } from '@/assets';
import Image from 'next/image';


const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[#115061] py-12 md:py-20 text-white">
                        <Container className="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
                            <div className="flex flex-col gap-4 text-center md:text-left">
                                <p className="text-base font-semibold">Starting at $999.90</p>
                                <h2 className="text-3xl md:text-5xl font-bold max-w-[500px] leading-tight font-sans">
                                    The best tablet Collection 2024
                                </h2>
                                <p className="text-lg font-bold">
                                    Exclusive offer
                                    <span className="text-yellow-500 mx-1">-30%</span> off this week
                                </p>
                                <button className="flex items-center justify-center md:justify-start gap-2 pl-3 bg-white text-black rounded-md 
                                    w-full md:w-32 text-sm font-semibold hover:bg-transparent hover:text-white py-3 
                                    border border-transparent hover:border-white/40 duration-200">
                                    Shop Now <GoArrowRight className="text-lg" />
                                </button>
                            </div>

                            <div className="w-full md:w-auto">
                                <Image src={banner} alt="bannerImageOne" className="w-full max-w-[400px] md:max-w-[500px] mx-auto md:mx-0" />
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
