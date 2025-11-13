import React, { use } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { SlCalender } from "react-icons/sl";
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyPropertyCard = ({ property, setProperties }) => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleUpdateInfo = (e, id) => {
        e.preventDefault();

        const propertyName = e.target.propertyName.value;
        const description = e.target.description.value;
        const longDescription = e.target.details.value;
        const price = e.target.price.value;
        const location = e.target.location.value;
        const category = e.target.category.value;
        const propertyImage = e.target.propertyImage.value;
        const email = e.target.userEmail.value;
        const name = e.target.userName.value;

        const updatedInfo = {
            propertyName: propertyName,
            description: description,
            longDescription: longDescription,
            price: price,
            location: location,
            category: category,
            propertyImage: propertyImage,
            postedBy: {
                email: email,
                name: name,
                profilePhoto: user.photoURL
            }
        }

        fetch(`http://localhost:3000/all-properties/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Data Updated Successfully",
                        icon: "success",
                    });
                }
                setProperties(prev => prev.map(property => property._id === id ? { ...property, ...updatedInfo } : property));
                navigate(`/property-details/${id}`);
            })
    }

    const handleDelete = (e, id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`http://localhost:3000/all-properties/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                setProperties((prev) => {
                                    const updated = prev.filter(p => p._id.toString() !== id.toString());
                                    return [...updated];
                                });

                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your property has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }

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
                        <button className="btn btn-success btn-outline" onClick={() => document.getElementById(property._id).showModal()}>Update</button>
                        <dialog id={property._id} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <p className='text-center mb-5 font-bold text-xl'>Update Property Details</p>
                                <form onSubmit={(e) => handleUpdateInfo(e, property._id)} className="fieldset">
                                    <label className="label">Property Name</label>
                                    <input name='propertyName' type="text" className="input w-full" placeholder="Property Name" defaultValue={property.propertyName} required />
                                    <label className="label">Short Description</label>
                                    <input name='description' type="text" className="input w-full" placeholder="Short Description" defaultValue={property.description} required />
                                    <label className="label">Details</label>
                                    <input name='details' type="text" className="input w-full" placeholder="Details" defaultValue={property.longDescription} required />
                                    <label className="label">Price</label>
                                    <input name='price' type="text" className="input w-full" placeholder="Property Price" defaultValue={property.price} required />
                                    <label className="label">Location</label>
                                    <input name='location' type="text" className="input w-full" placeholder="Property Location" defaultValue={property.location} required />
                                    <label className="label">Category</label>
                                    <input type="text" name='category' className='input w-full' placeholder='Property Category' defaultValue={property.category} required />
                                    <label className="label">Property Image URL</label>
                                    <input name='propertyImage' type="text" className="input w-full" placeholder="Property photoURL" defaultValue={property.propertyImage} required />
                                    <label className="label">Your Email</label>
                                    <input name='userEmail' type="email" className="input w-full" defaultValue={user.email} readOnly required />
                                    <label className="label">Your Name</label>
                                    <input name='userName' type="text" className="input w-full" defaultValue={user.displayName} readOnly required />
                                    <div className='flex justify-between mx-30 mt-4'>
                                        <button type='submit' className="btn btn-outline btn-success">Update</button>
                                        <button className="btn btn-outline btn-error" type='button' onClick={() => document.getElementById(property._id).close()}>Close</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                        <Link className='btn btn-primary btn-outline' to={`/property-details/${property._id}`}>View Details</Link>
                        <button onClick={(e) => handleDelete(e, property._id)} className='btn btn-error btn-outline'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPropertyCard;