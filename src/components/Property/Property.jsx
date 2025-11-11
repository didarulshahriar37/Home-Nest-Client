import React from 'react';
import { Link } from 'react-router';

const Property = ({ property }) => {
    return (
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
                    <div className="badge badge-outline">{property.location}</div>
                    <div className="badge badge-outline font-bold">Price: {property.price}</div>
                </div>
                <Link className='mt-5 btn btn-primary btn-outline w-40 mx-auto' to={`/property-details/${property._id}`}>View Details</Link>
            </div>
        </div>
    );
};

export default Property;