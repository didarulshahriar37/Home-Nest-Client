import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const AddProperties = () => {
    const { user } = use(AuthContext);
    const properties = useLoaderData();

    const categories = [...new Set(properties.map(property => property.category))];

    const handleAddProperty = (event) => {
        event.preventDefault();
        const propertyName = event.target.propertyName.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const location = event.target.location.value;
        const category = event.target.category.value;
        const propertyImage = event.target.propertyImage.value;
        const postedDate = new Date().toISOString();
        const name = event.target.userName.value;
        const email = event.target.userEmail.value;

        const newProperty = {
            propertyName: propertyName,
            description: description,
            price: price,
            location: location,
            category: category,
            propertyImage: propertyImage,
            postedDate: postedDate,
            postedBy: {
                name: name,
                email: email,
                profilePhoto: user.photoURL
            }
        };

        fetch("http://localhost:3000/all-properties", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProperty)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Property Added Succesfully !",
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
                event.target.reset();
            })
    }

    return (
        <div className='pt-10 md:pt-20 px-5 md:px-20 mt-10'>
            <h2 className='text-center font-bold md:text-4xl text-2xl'>ADD YOUR PROPERTY</h2>
            <div className="mt-10 mb-15 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleAddProperty} className="fieldset">
                        <label className="label">Property Name</label>
                        <input name='propertyName' type="text" className="input w-full" placeholder="Property Name" required />
                        <label className="label">Description</label>
                        <input name='description' type="text" className="input w-full" placeholder="Property Description" required />
                        <label className="label">Price</label>
                        <input name='price' type="text" className="input w-full" placeholder="Property Price" required />
                        <label className="label">Location</label>
                        <input name='location' type="text" className="input w-full" placeholder="Property Location" required />
                        <label className="label">Category</label>
                        <select defaultValue="" name='category' className="select w-full">
                            <option value="" disabled>Select a Category</option>
                            {
                                categories.map((category, index) => <option key={index} value={category}>{category}</option>)
                            }
                        </select>
                        <label className="label">Property Image URL</label>
                        <input name='propertyImage' type="text" className="input w-full" placeholder="Property photoURL" required />
                        <label className="label">Your Email</label>
                        <input name='userEmail' type="email" className="input w-full" defaultValue={user.email} readOnly required />
                        <label className="label">Your Name</label>
                        <input name='userName' type="text" className="input w-full" defaultValue={user.displayName} readOnly required />
                        <button type='submit' className="btn hover:bg-sky-600 bg-sky-400 mt-4">Add Property</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProperties;