import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Property from '../components/Property/Property';
import { HiEmojiSad } from "react-icons/hi";

const AllProperties = () => {
    const properties = useLoaderData();
    const [property, setProperty] = useState(properties);
    const [search, setSearch] = useState('');

    const handleSort = (type) => {

        let sorted = [...property];

        if (type === "price") {
            sorted.sort((a, b) => b.price - a.price);
        }
        if (type === "postedDate") {
            sorted.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        }

        setProperty(sorted);

    }

    const searchData = property.filter(property => property.propertyName.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className='pt-10 md:pt-20 px-5 md:px-20 mt-10'>
            <title>HomeNest - All Properties</title>
            <h3 className='text-center text-2xl md:text-4xl font-bold mb-10'>All <span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B32B2] to-[#1488CC]'>Properties</span></h3>
            <div className='flex items-center justify-between flex-col md:flex-row'>
                <div>
                    <p className='font-bold'>{searchData.length} properties found</p>
                </div>
                <div className='mt-5 md:mt-0 flex gap-10 md:gap-120'>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input onChange={(s) => setSearch(s.target.value)} type="search" required placeholder="Search" />
                        </label>
                    </div>
                    <div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 bg-sky-400">Sort By</div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li onClick={() => handleSort("price")} className='btn btn-ghost'>Price</li>
                                <li onClick={() => handleSort("postedDate")} className='btn btn-ghost'>Posted Date</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
                searchData.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 gap-5 md:gap-10 mb-15'>
                    {
                        searchData.map(property => <Property key={property._id} property={property}></Property>)
                    }
                </div>) : <div className='flex justify-center items-center p-15 md:p-30 text-2xl md:text-4xl font-bold'><p className='flex items-center gap-5'>Nothing Found <HiEmojiSad /></p></div>
            }
        </div>
    );
};

export default AllProperties;