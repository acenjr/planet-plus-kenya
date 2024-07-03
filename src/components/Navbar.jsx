import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from "../assets";
import { IoIosLeaf } from 'react-icons/io';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    return (
        <div className='w-full z-10 bg-white drop-shadow-lg relative'>
            <div className='flex justify-between items-center w-full h-[80px] md:max-w-[1240px] m-auto'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 w-full h-[75px]' />
                </div>

                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li className='cursor-pointer'><Link to="/">Home</Link></li>
                        <li className='cursor-pointer'><a href="/about">About</a></li>

                        <li className='cursor-pointer'><a href="/programs">Our Programs</a></li>
                        <li className='cursor-pointer'><Link to="/products">Products</Link></li>
                        <li className='cursor-pointer'><Link to="/partners">Partners</Link></li>
                        <li className='cursor-pointer'><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </div>

                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='bg-green-500 border border-green-500 rounded px-4 py-2 mr-4'><Link to="/blogs">Blog</Link></button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    <IoIosLeaf className='w-10 h-10 mr-2' />
                </div>
            </div>

            <ul className={`${toggle ? 'absolute top-0 left-0 bg-white w-full px-8 md:hidden z-20' : 'hidden'}`}>
                <li><Link to="/" onClick={handleClick}>Home</Link></li>
                <li><a href="/about" onClick={handleClick}>About</a></li>
                <li><a href="/programs" onClick={handleClick}>Programs</a></li>

                <li><Link to="/products" onClick={handleClick}>Products</Link></li>
                <li><Link to="/partners" onClick={handleClick}>Partners</Link></li>
                <li><Link to="/gallery" onClick={handleClick}>Gallery</Link></li>

                <div className='flex flex-col my-4 m-8'>
                    <button className='bg-green-500 border border-green-500 rounded px-4 py-2 mr-4'><Link to="/blogs" onClick={handleClick}>Blog</Link></button>
                </div>
            </ul>

            <div className='flex justify-center'>
                <h1 className='text-4xl md:text-6xl m-0 p-0 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-800 to-green-500 py-10 font-serif letter-spacing-2'>
                    Planet Plus Kenya
                </h1>
            </div>
        </div>
    );
}

export default Navbar;