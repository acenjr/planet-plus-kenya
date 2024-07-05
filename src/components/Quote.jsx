import React from 'react';

const Quote = () => {
    return (
        <div className="flex h-screen px-5 bg-pink-100">
            <div className="relative bg-white max-w-2xl mx-auto my-auto p-8 border-4 border-pink-400 rounded-tl-3xl rounded-br-3xl">
                <h1 className="text-2xl font-light leading-tight mb-6 md:text-3xl md:w-3/4">
                    You're not in the perfect business. <strong className="font-semibold">Stop pretending that's what the world wants from you.</strong> Truly perfect is becoming friendly with your imperfections on the way to doing something remarkable.
                </h1>
                <h4 className="text-right text-lg font-semibold leading-tight pt-6 relative z-10">
                    <strong>&mdash;Seth Godin</strong><br /><span className="text-pink-400">Abandoning perfection</span>
                </h4>
                <img className="absolute w-20 bottom-[-0.5rem] left-[-0.5rem] md:w-40 md:bottom-[-1rem] md:left-[-1rem]" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/Curly_Krungthep.svg' alt='' />
                <img className="absolute w-20 top-[-0.5rem] right-[-0.5rem] rotate-180 md:w-40 md:top-[-1rem] md:right-[-1rem]" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/Curly_Krungthep.svg' alt='' />
            </div>
        </div>
    );
};

export default Quote;
