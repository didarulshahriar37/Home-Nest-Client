import React from 'react';
import { IoHome } from "react-icons/io5";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const lists = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-properties">All Properties</NavLink></li>
        <li><NavLink to="/add-properties">Add Properties</NavLink></li>
        <li><NavLink to="/my-properties">My Properties</NavLink></li>
        <li><NavLink to="/my-ratings">My Ratings</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            lists
                        }
                    </ul>
                </div>
                <Link to="/" className='flex items-center gap-2'>
                    <IoHome className='w-7 h-7 text-blue-600'></IoHome>
                    <p className="text-xl font-bold">Home<span className='text-blue-600'>Nest</span></p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        lists
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to="/auth/sign-in" className='btn btn-outline btn-primary'>Sign In</Link>
                <Link to="/auth/sign-up" className='btn btn-outline btn-info'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;