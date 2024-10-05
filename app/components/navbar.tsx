'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [title, setTitle] = useState<string>('')

    function active(index: string) {
        setTitle(index)
    }

    return (
        <>
            <nav className='w-screen h-16 flex items-end z-50'>
                <div className='w-3/5 flex justify-between items-center mx-auto max-sm:px-0 max-lg:w-screen max-md:flex-col max-md:items-center max-md:gap-2 max-lg:justify-between max-lg:px-4'>
                    <div>
                        <Link href={'/'}>
                            <h1 className='text-2xl font-bold hover:text-emerald-400 cursor-pointer transition-all duration-300'> Suraj kumar </h1>
                        </Link>
                    </div>
                    <ul className='flex justify-start items-center gap-10 max-sm:gap-4'>
                        <Link href={'/'}>
                            <div className={`hover:border-b-2 hover:border-emerald-400 transition-all duration-100 ${title === 'Home' ? 'border-b-2 border-emerald-400 text-emerald-400' : ''}`} onClick={() => active('Home')}>
                                <li className='text-sm font-semibold hover:text-emerald-400 transition-all duration-300 cursor-pointer'> Home </li>
                            </div>
                        </Link>

                        <Link href={'/services'}>
                            <div className={`hover:border-b-2 hover:border-emerald-400 transition-all duration-100 ${title === 'Services' ? 'border-b-2 border-emerald-400 text-emerald-400' : ''}`} onClick={() => active('Services')}>
                                <li className='text-sm font-semibold hover:text-emerald-400 transition-all duration-300 cursor-pointer'> Services </li>
                            </div>
                        </Link>

                        <Link href={'/resume'}>
                            <div className={`hover:border-b-2 hover:border-emerald-400 transition-all duration-100 ${title === 'Resume' ? 'border-b-2 border-emerald-400 text-emerald-400' : ''}`} onClick={() => active('Resume')}>
                                <li className='text-sm font-semibold hover:text-emerald-400 transition-all duration-300 cursor-pointer'> Resume </li>
                            </div>
                        </Link>

                        <Link href={'/work'}>
                            <div className={`hover:border-b-2 hover:border-emerald-400 transition-all duration-100 ${title === 'Work' ? 'border-b-2 border-emerald-400 text-emerald-400' : ''}`} onClick={() => active('Work')}>
                                <li className='text-sm font-semibold hover:text-emerald-400 transition-all duration-300 cursor-pointer'> Work </li>
                            </div>
                        </Link>

                        <Link href={'/contact'}>
                            <div className={`hover:border-b-2 hover:border-emerald-400 transition-all duration-100 ${title === 'Contact' ? 'border-b-2 border-emerald-400 text-emerald-400' : ''}`} onClick={() => active('Contact')}>
                                <li className='text-sm font-semibold hover:text-emerald-400 transition-all duration-300 cursor-pointer'> Contact </li>
                            </div>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}
