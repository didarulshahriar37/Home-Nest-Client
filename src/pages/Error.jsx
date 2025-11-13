import React from 'react';
import error from "../assets/error.png";
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center mt-50 md:mt-0 p-10 md:p-25 space-y-5'>
            <title>Page Not Found</title>
            <div>
                <p className='text-6xl font-bold'>Oops!</p>
            </div>
            <div>
                <img src={error} alt="" />
            </div>
            <div>
                <p className='flex items-center gap-3 font-semibold text-4xl'>Page Not Found <FaSadTear></FaSadTear></p>
            </div>
            <div className='mt-3'>
                <Link to="/" className='btn border-none shadow-none bg-linear-to-r from-[#56CCF2] to-[#2F80ED] hover:from-[#00B4DB] hover:to-[#0083B0] text-white'>Home</Link>
            </div>
        </div>
    );
};

export default Error;