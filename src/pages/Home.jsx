import React from 'react';
import Banner from '../components/Banner/Banner';
import { FaClipboardList } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import agent1 from "../assets/Men1.jpg";
import agent3 from "../assets/Men2.jpg";
import agent2 from "../assets/women1.jpg";
import { FaStar } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <title>HomeNest - A Real Estate Listing Portal</title>
            <div>
                <Banner></Banner>
            </div>
            <div className='px-5 md:px-20 mt-15'>
                <div className='bg-base-100 rounded-2xl shadow-xl pb-15'>
                    <div className='text-center'>
                        <h2 className='pt-10 font-bold text-2xl md:text-4xl'>Why Choose Us?</h2>
                        <p className='px-5 mt-5 mb-10 text-xl'>We make property finding <span className='text-blue-600'>simple</span>, <span className='text-blue-600'>secure</span> & <span className='text-blue-600'>smart</span></p>
                    </div>
                    <div className='px-10 md:px-30 flex flex-col md:flex-row gap-5 md:gap-0 justify-between text-center'>
                        <div className='bg-base-300 shadow-md md:shadow-xl rounded-xl p-5 md:p-10 border-1 border-blue-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                            <h4 className='flex items-center gap-2 text-2xl font-bold ml-4 md:ml-0'><FaClipboardList/> Trusted Listings</h4>
                            <p className='mt-5'>All our properties are <br /> verified & safe.</p>
                        </div>
                        <div className='bg-base-300 shadow-md md:shadow-xl rounded-xl p-5 md:p-10 border-1 border-blue-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                            <h4 className='flex items-center gap-2 text-2xl font-bold ml-4 md:ml-0'><AiFillClockCircle/> Quick Processing</h4>
                            <p className='mt-5'>Buy, rent, or sell <br /> in just a few clicks.</p>
                        </div>
                        <div className='bg-base-300 shadow-md md:shadow-xl rounded-xl p-5 md:p-10 border-1 border-blue-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                            <h4 className='flex items-center gap-2 text-2xl font-bold ml-7 md:ml-0'><FaUserTie/> Expert Agents</h4>
                            <p className='mt-5'>Our experienced agents <br /> guide you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 md:px-20 mt-15 mb-15'>
                <h3 className='text-center text-2xl md:text-4xl font-bold'>Meet Our <span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B32B2] to-[#1488CC]'>Top Agents</span></h3>
                <p className='mt-2 md:mt-5 md:text-xl text-center'>Our experienced real estate professionals are here to guide you every step of the way — <br />helping you buy, sell, or rent with confidence</p>
                <div className='max-w-5xl grid grid-cols-1 md:grid-cols-3 mx-auto gap-1 md:gap-10'>
                    <div className='mt-10 bg-base-100 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <div className=''>
                            <img className='rounded-2xl w-70 mx-auto mt-5 mb-5 h-70 object-cover' src={agent1} alt="" />
                        </div>
                        <div className='px-5 '>
                            <p className='text-xl font-bold'>Arif Hossain</p>
                            <p className='italic text-gray-500'>Luxury Apartments Specialist</p>
                            <p className='mt-2'>“I am here to help you turning your premium living dreams into reality.”</p>
                            <p className='font-bold mt-5 flex items-center gap-2 mb-3'><FaStar className='text-orange-400'/> 4.9</p>
                        </div>
                    </div>
                    <div className='mt-10 bg-base-100 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <div className=''>
                            <img className='rounded-2xl w-70 mx-auto mt-5 mb-5 h-70 object-cover' src={agent2} alt="" />
                        </div>
                        <div className='px-5 '>
                            <p className='text-xl font-bold'>Nadia Karim</p>
                            <p className='italic text-gray-500'>Commercial Property Consultant</p>
                            <p className='mt-2'>“I am here to help you connecting businesses with the right spaces.”</p>
                            <p className='font-bold mt-5 flex items-center gap-2 mb-3'><FaStar className='text-orange-400'/> 4.6</p>
                        </div>
                    </div>
                    <div className='mt-10 bg-base-100 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <div className=''>
                            <img className='rounded-2xl w-70 mx-auto mt-5 mb-5 h-70 object-cover' src={agent3} alt="" />
                        </div>
                        <div className='px-5 '>
                            <p className='text-xl font-bold'>Salman Ahmed</p>
                            <p className='italic text-gray-500'>Family Homes & Rentals Expert</p>
                            <p className='mt-2'>“I am here to help families find the perfect place to call home.”</p>
                            <p className='font-bold mt-5 flex items-center gap-2 mb-3'><FaStar className='text-orange-400'/> 4.7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;