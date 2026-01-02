import React from 'react';
import animationData from "../../public/404_Error.json";
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router';
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <div className='flex flex-col items-center mt-50 md:mt-0 p-10 md:p-25 space-y-5'>
            <title>Page Not Found</title>
            <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    className="w-90 md:w-105"
                />
            <div className='mt-3'>
                <Link to="/" className='btn border-none shadow-none bg-linear-to-r from-[#56CCF2] to-[#2F80ED] hover:from-[#00B4DB] hover:to-[#0083B0] text-white'>Home</Link>
            </div>
        </div>
    );
};

export default Error;