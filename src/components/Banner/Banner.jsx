import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Banner.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdApartment } from "react-icons/md";
import apartment from "../../assets/apartment.jpg";
import family from "../../assets/family.jpg";
import { Link } from 'react-router';
import { IoIosPeople } from "react-icons/io";
import city from "../../assets/city.jpg";

const Banner = () => {
    return (
        <div className='mt-3 px-5 md:px-20 shadow-md'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[300px] md:h-[600px] shadow-md"
            >
                <SwiperSlide>
                    <div className='relative md:px-15 py-15 md:py-0 h-[300px] md:h-[600px] flex items-center text-white bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${apartment})`
                        }}>
                        <div className='absolute inset-0 bg-linear-to-b  md:bg-linear-to-r from-black/70 to-black/1'>
                            <div className='space-y-4 md:ml-15 mt-3 md:mt-40 relative z-10 text-center md:text-start max-w-lg'>
                                <h3 className='flex justify-center md:justify-normal items-center font-bold gap-2 text-xl md:text-4xl'><MdApartment></MdApartment> Find Your Dream House</h3>
                                <p className='text-sm md:text-lg'>Discover modern apartments, cozy family homes, and premium properties - all in one trusted platform.</p>
                                <Link to="/all-properties" className='btn border-none shadow-none hover:bg-sky-600 bg-sky-400'>All Properties</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative md:px-15 py-15 md:py-0 h-[300px] md:h-[600px] flex items-center text-white bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${family})`
                        }}>
                        <div className='absolute inset-0 bg-linear-to-b  md:bg-linear-to-r from-black/70 to-black/1'>
                            <div className='space-y-4 md:ml-15 mt-3 md:mt-40 relative z-10 text-center md:text-start max-w-lg'>
                                <h3 className='flex justify-center md:justify-normal items-center font-bold gap-2 text-xl md:text-4xl'><IoIosPeople></IoIosPeople> Trusted By Thousands</h3>
                                <p className='text-sm md:text-lg'>We connect you with verified listings, transparent deals, and trusted sellers — so you can move in with confidence.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative md:px-15 py-15 md:py-0 h-[300px] md:h-[600px] flex items-center text-white bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${city})`
                        }}>
                        <div className='absolute inset-0 bg-linear-to-b  md:bg-linear-to-r from-black/70 to-black/1'>
                            <div className='space-y-4 px-2 md:ml-15 mt-3 md:mt-40 relative z-10 text-center md:text-start max-w-lg'>
                                <h3 className='flex justify-center md:justify-normal items-center font-bold gap-2 text-xl md:text-4xl'>Explore Homes Near You — Anytime, Anywhere</h3>
                                <p className='text-sm md:text-lg'>Browse properties by location, budget, or type — our powerful filters make home-hunting effortless.</p>
                                <Link to="/all-properties" className='btn border-none shadow-none hover:bg-sky-600 bg-sky-400'>All Properties</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;