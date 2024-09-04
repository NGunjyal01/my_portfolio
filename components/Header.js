import React from 'react'

const Header = () => {
    return (
        <div className='fixed z-20 w-full flex justify-between bg-white shadow-md py-10 text-lg'>
            <h1 className='ml-[5%]'>Nakshatra.dev</h1>
            <div className='flex gap-5 mr-[5%]'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Projects</h1>
                <h1>Contact</h1>
            </div>
        </div>
    )
}

export default Header
