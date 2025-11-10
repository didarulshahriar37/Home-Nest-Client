import React from 'react';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content p-10">
            <nav>
                <Link to="/" className='flex items-center gap-2'>
                    <IoHome className='w-7 h-7 text-blue-600'></IoHome>
                    <p className="text-xl font-bold">Home<span className='text-blue-600'>Nest</span></p>
                </Link>
            </nav>
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Terms & Conditions</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className='hover:cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <FaFacebook className='w-7 h-7'></FaFacebook>
                    </a>
                    <a className='hover:cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <IoLogoWhatsapp className='w-7 h-7'></IoLogoWhatsapp>
                    </a>
                    <a className='hover:cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <FaXTwitter className='w-7 h-7'></FaXTwitter>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by HomeNest</p>
            </aside>
        </footer>
    );
};

export default Footer;