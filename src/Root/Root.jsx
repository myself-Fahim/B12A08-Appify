import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col  '>
            <Navbar></Navbar>
            <div className='flex-1 overflow-auto bg-[#E5E7EB]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;