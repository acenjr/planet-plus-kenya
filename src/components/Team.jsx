import React from 'react';
import { beverley, diana, idah, juliana, marleen, roselindah } from '../assets';

const Team = () => {
    return (
        <div className="font-sans text-[#333] p-8 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex justify-center items-center">
                    <h2 className="text-4xl font-extrabold text-white bg-gradient-to-r from-green-300 via-green-500 to-green-600 p-6 rounded-md">
                        Our Team
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={juliana} className="w-full h-[80%] object-cover rounded-t-md" alt="Juliana Kimani" />
                        <div className="p-4">
                            <h4 className="text-xl font-extrabold">Juliana Kimani</h4>
                            <p className="text-xs mt-1">Partnerships and Stakeholder Engagement.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={roselindah} className="w-full h-[80%] object-cover rounded-t-md" alt="Roselindah Atieno" />
                        <div className="p-4">
                            <h4 className="text-xl font-extrabold">Roselindah Atero</h4>
                            <p className="text-xs mt-1">Community Health.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={idah} className="w-full h-[80%] object-cover rounded-t-md" alt="Idah Odeka" />
                        <div className="p-4">
                            <h4 className="text-xl font-extrabold">Idah Odeka</h4>
                            <p className="text-xs mt-1">Urbanism, Circular Economy, and Sustainable Development.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={diana} className="w-full h-[80%] object-cover rounded-t-md" alt="Diana Musa" />
                        <div className="p-4">
                            <h4 className="text-xl font-extrabold">Diana Musa</h4>
                            <p className="text-xs mt-1">Social Enterprises.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={marleen} className="w-full h-[80%] object-cover rounded-t-md" alt="Marleen Atieno" />
                        <div className="p-4">
                            <h4 className="text-xl font-extrabold">Marleen Atieno</h4>
                            <p className="text-xs mt-1">Environmental, Social ang Governance (ESG) Program.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={beverley} className="w-full h-[80%] object-cover rounded-t-md" alt="Beverley Masita" />
                        <div className="p-4">
                            <h4 className="text-xl font-extrabold">Beverly Masita</h4>
                            <p className="text-xs mt-1">Communications and PR.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
