import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-base-300'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='pt-20'>
                <Outlet></Outlet>
            </main>
            <footer className='mt-20'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;