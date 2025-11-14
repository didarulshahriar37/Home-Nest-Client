import React, { useContext } from 'react';
import { IoHome } from "react-icons/io5";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Signed Out successfully",
                    icon: "success",
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }

    const lists = <>
        {
            user ? <>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/all-properties">All Properties</NavLink></li>
                <li><NavLink to="/add-properties">Add Properties</NavLink></li>
                <li><NavLink to="/my-properties">My Properties</NavLink></li>
                <li><NavLink to="/my-ratings">My Ratings</NavLink></li>
            </> :
                <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/all-properties">All Properties</NavLink></li>
                    <li><NavLink to="/add-properties">Add Properties</NavLink></li>
                </>
        }
    </>
    return (
        <div className="navbar opacity-98 shadow-sm md:px-20 fixed top-0 z-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-9999 mt-3 w-52 p-2 shadow">
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
                {
                    user ? <div className='flex items-center gap-2'>
                        <div className="dropdown dropdown-center">
                            <img tabIndex={0} role='button' className='w-12 h-12 rounded-full object-cover cursor-pointer' src={user.photoURL} alt="" />
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-9999 w-52 p-2 shadow-md">
                                <li><p>{user.displayName}</p></li>
                                <li><p>{user.email}</p></li>
                                <li><button onClick={handleSignOut} className='btn btn-outline btn-primary'>Sign Out</button></li>
                            </ul>
                        </div>

                        <p className=''>Hi, {user.displayName}</p>
                    </div> : <>
                        <Link to="/auth/sign-in" className='btn btn-outline btn-primary'>Sign In</Link>
                        <Link to="/auth/sign-up" className='btn btn-outline btn-info'>Sign Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;