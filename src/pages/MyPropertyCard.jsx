import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';
import { SlCalender } from "react-icons/sl";

const MyPropertyCard = ({ property }) => {
    return (
        <div>
            <div className="card rounded-2xl bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <figure>
                    <img className='md:w-95 w-88 object-cover h-70 mt-5 rounded-2xl'
                        src={property.propertyImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-between">
                        {property.propertyName}
                        <div className="badge bg-sky-300">{property.category}</div>
                    </h2>
                    <p>{property.description}</p>
                    <div className="card-actions flex-col mt-5">
                        <p className='flex items-center gap-2'><SlCalender /> Posted on: <span className='font-bold'>{new Date(property.postedDate).toLocaleDateString("en-GB")}</span></p>
                        <div className="badge flex gap-1 badge-outline"><MdOutlineLocationOn />{property.location}</div>
                        <div className="badge badge-outline font-bold">Price: {property.price}</div>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Link className='btn btn-success btn-outline'>Update</Link>
                        <Link className='btn btn-primary btn-outline' to={`/property-details/${property._id}`}>View Details</Link>
                        <Link className='btn btn-error btn-outline'>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPropertyCard;