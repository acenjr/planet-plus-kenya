import React from 'react'
import { head } from '../assets'

const Header = () => {
    return (
        <div className="z-0 relative bg-slate-700 py-32 min-h-screen font-serif">
            <div className="absolute inset-0">
                <img
                    src={head}
                    alt="Background Image"
                    className="w-full h-full object-cover "
                />
            </div>
            <div className="absolute bottom-0 left-0 mx-4 mb-8 z-10 text-left block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-start items-start">
                <p className="text-3xl font-bold md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 font-serif">
                    For the People
                </p>
                <p className="text-3xl pl-8 font-bold md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 font-serif">
                    For the Planet
                </p>
                <p className="text-2xl pl-14 font-bold md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 font-serif">
                    For Prosperity
                </p>
            </div>
        </div>
    )
}

export default Header