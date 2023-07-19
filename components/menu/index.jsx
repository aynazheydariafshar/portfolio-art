import React from 'react'

export default function Menu() {
    return (
        <div className='flex flex-col justify-center items-center space-y-4'>
            <button className="focus:outline-none text-5xl md:text-6xl lg:text-7xl  font-bold hover:underline hover:text-[#FED013]">Home</button>
            <button className="focus:outline-none text-5xl md:text-6xl lg:text-7xl  font-bold hover:underline hover:text-[#FED013]">Artworks</button>
            <button className="focus:outline-none text-5xl md:text-6xl lg:text-7xl  font-bold hover:underline hover:text-[#FED013]">Contact</button>
            <button className="focus:outline-none text-5xl md:text-6xl lg:text-7xl  font-bold hover:underline hover:text-[#FED013]">Resume</button>
        </div>
    )
}
