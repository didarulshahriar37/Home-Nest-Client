import React, { use, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaHashtag } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoPricetags } from "react-icons/io5";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const PropertyDetails = () => {
    const { user } = use(AuthContext);
    const data = useLoaderData();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const { id } = useParams();
    const singleProperty = data.find(property => property._id === id)

    const handlePostReview = (e) => {
        e.preventDefault();

        const reviewData = {
            propertyName: singleProperty.propertyName,
            propertyImage: singleProperty.propertyImage,
            postedDate: new Date().toISOString(),
            review: review,
            rating: rating,
            postedBy: {
                name: singleProperty.postedBy.name,
                email: singleProperty.postedBy.email
            },
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }

        fetch("https://home-nest-server-green.vercel.app/reviews", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Review Posted Succesfully !",
                        icon: "success",
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
                e.target.reset();
            })
    }

    return (
        <div className='pt-10 md:pt-20 px-5 md:px-20 mt-10 mb-15'>
            <title>{singleProperty.propertyName}</title>
            <div className='flex flex-col md:flex-row gap-10'>
                <img className='w-160 h-100 rounded-2xl shadow-xl' src={singleProperty.propertyImage} alt="" />
                <div>
                    <h4 className='text-3xl font-bold'>{singleProperty.propertyName}</h4>
                    <div className='mt-1 flex gap-3'>
                        <div className="badge badge-outline badge-info"><FaHashtag /> {singleProperty.category}</div>
                        <div className="badge badge-outline badge-primary"><IoLocationSharp /> {singleProperty.location}</div>
                    </div>
                    <div className='mt-10'>
                        <p className='text-xl font-bold'>Details</p>
                        <p className='mt-2 text-gray-600'>{singleProperty.longDescription}</p>
                    </div>
                    <div className='mt-5'>
                        <div className="badge badge-soft badge-success text-xl font-bold"><IoPricetags /> Price: {singleProperty.price}</div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl font-bold'>Contact Details</p>
                        <div className='mt-2 flex items-center gap-5'>
                            <img className='w-15 h-15 object-cover rounded-full' src={singleProperty.postedBy.profilePhoto} alt="" />
                            <div className='space-y-1'>
                                <p className='text-gray-600 font-semibold'>{singleProperty.postedBy.name}</p>
                                <p className='text-gray-600'>{singleProperty.postedBy.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20'>
                <h3 className='text-4xl font-bold'>Rate the <span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B32B2] to-[#1488CC]'>Property</span></h3>
                <form onSubmit={handlePostReview} className='mt-10 mx-auto w-95 bg-base-100 p-6 rounded-2xl shadow-xl'>
                    <p>Rate this property</p>
                    <div className='mt-1 flex justify-center'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />
                    </div>
                    <div className='mt-5 flex flex-col'>
                        <label className=''>Write your review</label>
                        <textarea onChange={e => setReview(e.target.value)} className='mt-1 border border-black p-1 rounded-md' name="" id="" placeholder='Write your review'></textarea>
                    </div>
                    <div>
                        <button type='submit' className='mt-5 btn btn-primary btn-outline'>Post</button>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
};

export default PropertyDetails;