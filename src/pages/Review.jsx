import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Review = ({ review }) => {
    return (
        <div className='card rounded-2xl p-5 bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
            <div className='flex items-center gap-2'>
                <img className='w-12 h-12 object-cover rounded-full' src={review.photo} alt="" />
                <div>
                    <p className='font-bold'>{review.name}</p>
                    <p className='text-gray-600'>{new Date(review.postedDate).toLocaleDateString("en-GB")}</p>
                </div>
            </div>
            <div className='mt-5'>
                <h4 className='text-xl'>Property: <span className='font-bold'>{review.propertyName}</span></h4>
            </div>
            <div className='mt-2 flex justify-center'>
                <img className='w-90 h-60 rounded-2xl object-cover' src={review.propertyImage} alt="" />
            </div>
            <div className='mt-2'>
                <p className='flex items-center gap-1 text-orange-500'><FaRegStarHalfStroke className='' /> {review.rating}</p>
                <p>Comment: <span className='text-gray-600'>{review.review}</span></p>
            </div>
        </div>
    );
};

export default Review;