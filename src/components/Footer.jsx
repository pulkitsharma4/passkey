import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex justify-around py-2 h-[7vh] w-full'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>Key&gt;</span>
            </div>
            <div className='flex text-xl'>
                Created with&nbsp;<img width={30} src="\icons\heart.png" alt="" />&nbsp;by Pulkit Sharma
            </div>
        </div>
    )
}

export default Footer
