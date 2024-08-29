import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white px-4 h-[8vh]'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>Key&gt;</span>
                </div>
                <a href="https://github.com/pulkitsharma4/passkey" target="_blank" rel="noopener noreferrer">
                <button className='text-white bg-green-800 rounded-full flex ring-1 ring-white'>
                    <img width={40} src="/icons/github.svg" alt="github logo" className='invert p-1'/>
                </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
