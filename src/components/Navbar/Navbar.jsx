import React from 'react';
import gitIcon from './../../assets/github Icon.svg'
import Logo from './../../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const toGithub = () =>{
        window.open("https://github.com/myself-Fahim","_blank")
    }
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-[80px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink className='font-[inter]' to='/'>Home</NavLink>
                            <NavLink className='font-[inter]' to='/apps'>Apps</NavLink>
                            <NavLink className='font-[inter]' to='/installation'>Instalaltion</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className='w-[40px] h-[40px] flex gap-1 items-center'>
                        <img className='w-[100%] h-[100%]' src={Logo}/>
                        <h1 className='font-[inter] font-bold text-[#632EE3]'>Appify</h1>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5">
                        <NavLink className='font-[inter]' to='/'>Home</NavLink>
                        <NavLink className='font-[inter]' to='/apps'>Apps</NavLink>
                        <NavLink className='font-[inter]' to='/installation'>Instalaltion</NavLink>
                    </ul>
                </div>

                <div className="navbar-end">
                   <Link onClick={toGithub} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                      <div className='h-[20px] w-[20px]'>
                        <img className='h-[100%] w-[100%]' src={gitIcon}/>
                      </div>
                     <h1 className='text-[white] font-[inter]'>Contributer</h1> 
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;