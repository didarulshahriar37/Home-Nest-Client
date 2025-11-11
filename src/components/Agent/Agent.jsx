import React from 'react';
import { FaStar } from 'react-icons/fa';

const Agent = ({ agent }) => {
    const { name, role, bio, rating, image } = agent;
    return (
        <div className='mt-10 bg-base-100 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
            <div className=''>
                <img className='rounded-2xl w-70 mx-auto mt-5 mb-5 h-70 object-cover' src={image} alt="" />
            </div>
            <div className='px-5 '>
                <p className='text-xl font-bold'>{name}</p>
                <p className='italic text-gray-500'>{role}</p>
                <p className='mt-2'>“{bio}”</p>
                <p className='font-bold mt-5 flex items-center gap-2 mb-3'><FaStar className='text-orange-400' /> {rating}</p>
            </div>
        </div>
    );
};

export default Agent;