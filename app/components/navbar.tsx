import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className='w-screen h-16 flex items-end'>
                <div className='w-3/5 flex justify-between items-center mx-auto'>
                    <h1 className='text-2xl font-bold hover:text-emerald-400 cursor-pointer transition-all duration-300'> Suraj kumar </h1>
                    <ul className='flex justify-start items-center gap-10'>
                        <div className='hover:border-b-2 hover:border-emerald-300 transition-all duration-100'>
                            <li className='text-sm font-semibold hover:text-emerald-300 transition-all duration-300 cursor-pointer'> Home </li>
                        </div>
                        <div className='hover:border-b-2 hover:border-emerald-300 transition-all duration-100'>
                            <li className='text-sm font-semibold hover:text-emerald-300 transition-all duration-300 cursor-pointer'> Services </li>
                        </div>
                        <div className='hover:border-b-2 hover:border-emerald-300 transition-all duration-100'>
                            <li className='text-sm font-semibold hover:text-emerald-300 transition-all duration-300 cursor-pointer'> Resume </li>
                        </div>
                        <div className='hover:border-b-2 hover:border-emerald-300 transition-all duration-100'>
                            <li className='text-sm font-semibold hover:text-emerald-300 transition-all duration-300 cursor-pointer'> Work </li>
                        </div>
                        <div className='hover:border-b-2 hover:border-emerald-300 transition-all duration-100'>
                            <li className='text-sm font-semibold hover:text-emerald-300 transition-all duration-300 cursor-pointer'> Contact </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}
