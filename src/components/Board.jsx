import React from 'react'
import { paul, timpian, jonathan } from '../assets'

const Board = () => {
    return (
        <div className="font-sans text-[#333] p-8 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex justify-center items-center">
                    <h2 className="text-4xl font-extrabold text-white bg-gradient-to-r from-green-300 via-green-500 to-green-600 p-6 rounded-lg">
                        Our Board of Directors
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  p-6   ">
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={paul} className="w-full h-[80%] object-cover rounded-t-md" alt="" />
                        <div className="p-4">
                            <h4 className="text-2xl text-center font-extrabold">Paul Flynn</h4>

                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={timpian} className="w-full h-[80%] object-cover rounded-t-md" alt="" />
                        <div className="p-4">
                            <h4 className="text-2xl text-center font-extrabold">Timpiyan Kisimir</h4>

                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col shadow-md">
                        <img src={jonathan} className="w-full h-[80%] object-cover rounded-t-md" alt="" />
                        <div className="p-4">
                            <h4 className="text-2xl text-center font-extrabold">Jonathan Ndeveni</h4>

                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Board