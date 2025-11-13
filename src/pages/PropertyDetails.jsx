import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaHashtag } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoPricetags } from "react-icons/io5";

const PropertyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const SingleProperty = data.find(property => property._id === id)

    return (
        <div className='pt-10 md:pt-20 px-5 md:px-20 mt-10 mb-15'>
            <div className='flex gap-10'>
                <img className='w-160 h-100 rounded-2xl shadow-xl' src={SingleProperty.propertyImage} alt="" />
                <div>
                    <h4 className='text-3xl font-bold'>{SingleProperty.propertyName}</h4>
                    <div className='mt-1 flex gap-3'>
                        <div className="badge badge-outline badge-info"><FaHashtag/> {SingleProperty.category}</div>
                        <div className="badge badge-outline badge-primary"><IoLocationSharp/> {SingleProperty.location}</div>
                    </div>
                    <div className='mt-10'>
                        <p className='text-xl font-bold'>Details</p>
                        <p className='mt-2 text-gray-600'>{SingleProperty.longDescription}</p>
                    </div>
                    <div className='mt-5'>
                        <div className="badge badge-soft badge-success text-xl font-bold"><IoPricetags/> Price: {SingleProperty.price}</div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl font-bold'>Contact Details</p>
                        <div className='mt-2 flex items-center gap-5'>
                            <img className='w-15 h-15 object-cover rounded-full' src={SingleProperty.postedBy.profilePhoto} alt="" />
                            <div className='space-y-1'>
                                <p className='text-gray-600 font-semibold'>{SingleProperty.postedBy.name}</p>
                                <p className='text-gray-600'>{SingleProperty.postedBy.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;