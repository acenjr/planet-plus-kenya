import React from "react";
import { diana, grid1, grid12, grid13, grid14, grid19, grid22, grid23, grid4, grid9 } from "../assets";

const AllPrograms = () => {
    return (
        <div className=" py-16 font-serif">
            <div className='flex justify-center'>
                <h1 className='text-4xl md:text-6xl m-0 p-0 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-800 to-green-500 py-10 font-serif letter-spacing-2'>
                    Our Programs
                </h1>
            </div>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img
                        className="h-full w-full object-cover"
                        src={grid9}
                        alt=""
                    />
                </div>
                <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-60 lg:w-3/5 lg:left-0 lg:mt-70 lg:ml-40 xl:mt-70
                 xl:ml-24">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
                            1. Landscape Restoration and Climate Action
                        </h2>
                        <p className="mt-4">
                            Landscape restoration is a vital component of climate action, as it tackles both the root causes and the consequences of climate change.

                            <br />
                            We have carried out successful land restoration projects in the Semi-Arid areas of Machakos, Makueni and Kajiado Counties.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img
                        className="h-full w-full object-cover"
                        src={grid22}
                        alt="Winding mountain road"
                    />
                </div>
                <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-60 lg:w-3/5 lg:left-0 lg:mt-50 lg:ml-40 xl:mt-50
                 xl:ml-24">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
                            2. Education for Sustainable Development
                        </h2>
                        <p className="mt-4">
                            The Education for Sustainable Development (ESD) Initiative aims to equip individuals and communities with the understanding and tools needed to foster sustainable practices and contribute to global sustainability goals. This program focuses on integrating sustainability into educational systems, promoting lifelong learning, and encouraging active participation in sustainable development.

                        </p>
                    </div>
                </div>
            </div>

            <div className=" py-16 font-serif">
                <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <img
                            className="h-full w-full object-cover"
                            src={grid13}
                            alt=""
                        />
                    </div>
                    <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-60 lg:w-3/5 lg:left-0 lg:mt-50 lg:ml-40 xl:mt-50
                 xl:ml-24">
                        <div className="flex flex-col p-12 md:px-16">
                            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
                                3. Urbanism, Circular Economy and Sustainable Development.
                            </h2>
                            <p className="mt-4">
                                The Urban Sustainability and Circular Economy Initiative (USCEI) aims to promote sustainable urban development by integrating circular economy principles into urban planning and development practices. This program seeks to create resilient, resource-efficient, and vibrant urban environments that prioritise sustainability, equity, and quality of life for all residents
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <img
                            className="h-full w-full object-cover"
                            src={grid23}
                            alt="Winding mountain road"
                        />
                    </div>
                    <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-60 lg:w-3/5 lg:left-0 lg:mt-50 lg:ml-40 xl:mt-50
                 xl:ml-24">
                        <div className="flex flex-col p-12 md:px-16">
                            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
                                4. Advocacy and Awareness, Community Engagement and participation.
                            </h2>
                            <p className="mt-4">
                                The Advocacy, Awareness, and Community Engagement for Environmental Action (AACEA) program aims to raise awareness about critical environmental issues, advocate for sustainable policies, and engage communities in active participation to foster environmental stewardship and resilience.
                            </p>
                        </div>
                    </div>
                </div>


                <div className=" py-16 font-serif">
                    <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                            <img
                                className="h-full w-full object-cover"
                                src={grid19}
                                alt=""
                            />
                        </div>
                        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-60 lg:w-3/5 lg:left-0 lg:mt-50 lg:ml-40 xl:mt-50
                 xl:ml-24">
                            <div className="flex flex-col p-12 md:px-16">
                                <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
                                    5. Gender, Children, Youth and Climate Action.
                                </h2>
                                <p className="mt-4">
                                    The Gender, Children, Youth, and Climate Action (GCYCA) program aims to integrate gender considerations, empower children and youth, and address the unique vulnerabilities and potential contributions of these groups in climate action. This program seeks to create inclusive, equitable, and effective strategies for climate mitigation and adaptation.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPrograms;
