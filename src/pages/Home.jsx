import React from 'react';
import Banner from '../components/Banner/Banner';
import { FaClipboardList } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import Agents from '../components/Agents/Agents';
import { useLoaderData } from 'react-router';
import Property from '../components/Property/Property';

const agentsPromise = fetch("http://localhost:3000/agents").then(res => res.json());

const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <title>HomeNest - A Real Estate Listing Portal</title>
            <div>
                <Banner></Banner>
            </div>
            <div className='px-5 md:px-20 mt-20'>
                <div className='bg-base-100 rounded-2xl shadow-xl pb-15'>
                    <div className='text-center'>
                        <h2 className='pt-10 font-bold text-2xl md:text-4xl'>Why Choose Us?</h2>
                        <p className='px-5 mt-5 mb-10 text-xl'>We make property finding <span className='text-blue-600'>simple</span>, <span className='text-blue-600'>secure</span> & <span className='text-blue-600'>smart</span></p>
                    </div>
                    <div className='px-10 md:px-30 flex flex-col md:flex-row gap-5 md:gap-0 justify-between text-center'>
                        <div className='bg-base-300 shadow-md md:shadow-xl rounded-xl p-5 md:p-10 border border-blue-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                            <h4 className='flex items-center gap-2 text-2xl font-bold ml-4 md:ml-0'><FaClipboardList /> Trusted Listings</h4>
                            <p className='mt-5'>All our properties are <br /> verified & safe.</p>
                        </div>
                        <div className='bg-base-300 shadow-md md:shadow-xl rounded-xl p-5 md:p-10 border border-blue-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                            <h4 className='flex items-center gap-2 text-2xl font-bold ml-4 md:ml-0'><AiFillClockCircle /> Quick Processing</h4>
                            <p className='mt-5'>Buy, rent, or sell <br /> in just a few clicks.</p>
                        </div>
                        <div className='bg-base-300 shadow-md md:shadow-xl rounded-xl p-5 md:p-10 border border-blue-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                            <h4 className='flex items-center gap-2 text-2xl font-bold ml-7 md:ml-0'><FaUserTie /> Expert Agents</h4>
                            <p className='mt-5'>Our experienced agents <br /> guide you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 md:px-20 mt-20'>
                <h3 className='text-center text-2xl md:text-4xl font-bold'>Meet Our <span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B32B2] to-[#1488CC]'>Top Agents</span></h3>
                <p className='mt-2 md:mt-5 md:text-xl text-center'>Our experienced real estate professionals are here to guide you every step of the way — <br />helping you buy, sell, or rent with confidence</p>
                <div>
                    <Agents agentsPromise={agentsPromise}></Agents>
                </div>
            </div>
            <div className='px-5 md:px-20 mt-20 mb-15'>
                <h3 className='text-center text-2xl md:text-4xl font-bold'>Featured <span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B32B2] to-[#1488CC]'>Properties</span></h3>
                <div className='grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 gap-5 md:gap-10'>
                    {
                        properties.map(property => <Property key={property._id} property={property}></Property>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;