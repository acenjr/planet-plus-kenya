import React from 'react'

// import { Link } from 'react-router-dom';
import { grid, grid1, grid11, grid12, grid13, grid14, grid15, grid19, grid3, grid5, } from '../assets';

const Programs = () => {
    return (
        <div className=" py-10 w-full font-sans">
            <div className='p-10'>
                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
                    <span>Our </span>
                    <span className="font-serif italic text-green-400">Programs</span>
                </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2  ">

                <div className="grid gap-2 ">
                    <div>
                        <img className="h-auto max-w-full rounded-lg " src={grid} alt="" />
                    </div>
                    <h3> <strong className='sm:text-2xl text-sm'>1. Land Restoration and Climate Action.</strong> <em> <a className='cursor-pointer' href="/programs">Read More</a></em></h3>

                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid1} alt="" />
                    </div>
                    {/* <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid01} alt="" />
                    </div> */}

                </div>
                <div className="grid gap-2">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid12} alt="" />
                    </div>
                    <h3> <strong className='sm:text-2xl text-sm'>2. Education for Sustainable Development.</strong> <em> <a className='cursor-pointer' href="/programs">Read More</a></em></h3>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid11} alt="" />
                    </div>

                    {/* <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid13} alt="" />
                    </div> */}
                </div>

                <div className="grid gap-2">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid15} alt="" />
                    </div>
                    <h3> <strong className='sm:text-2xl text-sm'>3. Urbanism, Circular Economy and Sustainable Development.</strong> <em> <a className='cursor-pointer' href="/programs">Read More</a></em></h3>
                    {/* <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid15} alt="" />
                    </div> */}

                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid13} alt="" />
                    </div>

                </div>
                <div className="grid gap-2">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid5} alt="" />
                    </div>
                    <h3> <strong className='sm:text-2xl text-sm'>4. Advocacy and Awareness, Community Engagement and Participation.</strong> <em> <a className='cursor-pointer' href="/programs">Read More</a></em></h3>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid14} alt="" />
                    </div>

                    {/* <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid2} alt="" />
                    </div> */}
                </div>
                <div className="grid gap-2">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid3} alt="" />
                    </div>
                    <h3> <strong className='sm:text-2xl text-sm'>5. Gender, Children, Youth and Climate Action.</strong> <em> <a className='cursor-pointer' href="/programs">Read More</a></em></h3>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid19} alt="" />
                    </div>

                    {/* <div>
                        <img className="h-auto max-w-full rounded-lg" src={grid2} alt="" />
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default Programs