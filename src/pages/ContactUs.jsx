import Lottie from 'lottie-react';
import React from 'react';
import animationData from "../../public/contact_us.json";
import emailIcon from "../../public/Email.json";
import locationIcon from "../../public/Location.json";
import callIcon from "../../public/Call.json";

const ContactUs = () => {
    return (
        <div className='pt-10 md:pt-20 px-5 md:px-20 mt-10'>
            <title>HomeNest - Contact Us</title>
            <div className='text-center mb-5'>
                <h3 className='text-2xl md:text-4xl font-bold'><span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B32B2] to-[#1488CC]'>Contact</span> Us</h3>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-5 md:gap-20'>
                <div>
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        className="w-90 md:w-150"
                    />
                </div>
                <div className='bg-base-100 md:p-10 rounded-2xl shadow-2xl w-full mb-10'>
                    <div className='flex flex-col md:flex-row items-center gap-5 py-5'>
                        <div className='flex flex-col items-center gap-2'>
                            <div className=''>
                                <Lottie
                                    animationData={emailIcon}
                                    loop
                                    autoplay
                                    className="w-20 md:w-40"
                                />
                            </div>
                            <div className='text-center'>
                                <h3 className='font-bold'>Email</h3>
                                <p>support@homenest.com</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <div>
                                <Lottie
                                    animationData={locationIcon}
                                    loop
                                    autoplay
                                    className="w-35 md:w-62"
                                />
                            </div>
                            <div className='text-center'>
                                <h3 className='font-bold'>Location</h3>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <div>
                                <Lottie
                                    animationData={callIcon}
                                    loop
                                    autoplay
                                    className="w-20 md:w-40"
                                />
                            </div>
                            <div className='text-center'>
                                <h3 className='font-bold'>Call</h3>
                                <p>+880 1234-567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;