import React from 'react';
import fb from './../../assets/fb icon.svg'
import lnkdin from './../../assets/lnkdin icon.svg'
import twtr from './../../assets/twitterIcon.svg'

const Footer = () => {
    return (
        <footer className='bg-black py-7'>
            <ul className='text-white font-[inter] flex gap-8 justify-center items-center'>
                <li><a href="">About us</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Details</a></li>
            </ul>

            <div className='flex items-center justify-center gap-8  mt-5'>
                <a href=""><img src={fb} /></a>
                <a href=""><img src={twtr} /></a>
                <a href=""><img src={lnkdin} /></a>
            </div>

            <div className='text-white font-[inter] mt-7'>
                <p className='text-center text-[0.7rem]'>Copyright © 2025 - All right reserved by <span className='font-bold '>Appify.io</span></p>
            </div>

        </footer>

    );
};

export default Footer;