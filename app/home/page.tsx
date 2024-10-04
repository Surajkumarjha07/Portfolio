'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
    return (
        <>
            <section className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 -z-10'>
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {
                            <>
                                <div className='w-3/5 h-fit mx-auto flex justify-center items-center gap-20 mt-20'>
                                    <div className=''>
                                        <p className='text-lg font-bold'> Software Developer | Web-Application Developer </p>
                                        <p className='text-6xl font-bold mt-1'> Hello I'm </p>
                                        <p className='text-5xl font-bold text-emerald-400 dancingFont mt-2 mb-4'> Suraj kumar jha </p>
                                        <p className='text-sm text-gray-300'> Full Stack Web Application and Software Developer with expertise in designing and developing end-to-end solutions. Skilled in both front-end and back-end technologies, I create efficient, secure, and user-friendly applications. Passionate about transforming ideas into functional software that drives business success. </p>

                                        <div className='flex justify-start items-center gap-10 my-10'>
                                            <a href={'/My_Resume.docx'} download="SurajKumarJha">
                                            <button className='flex justify-center items-center gap-4 font-bold bg-emerald-400 text-gray-950 border-2 border-emerald-400 px-4 py-2 rounded-full'> Download CV <Image src="https://img.icons8.com/?size=64&id=frlIxSuEDkbi&format=png" alt='' width={20} height={20}/> </button>
                                            </a>

                                            <Link href={'https://www.linkedin.com/in/suraj-kumar-jha-1946712aa/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FERbeHxIS3K7JbSxh3caGQ%3D%3D'}>
                                                <div className='bg-gradient-to-b from-sky-700 to-white rounded-full p-[2px]'>
                                                    <div className='w-fit h-fit p-1 bg-gray-800 cursor-pointer rounded-full '>
                                                        <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" className='w-8 h-8' />
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href={'https://github.com/dashboard'}>
                                                <div className='bg-gradient-to-b from-black to-white rounded-full p-[2px]'>
                                                    <div className='w-fit h-fit p-1 bg-gray-800 cursor-pointer rounded-full '>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='w-8 h-8' />
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href={'https://www.instagram.com/'}>
                                                <div className='bg-gradient-to-b from-pink-700 via-white to-violet-700 rounded-full p-[2px]'>
                                                    <div className='w-fit h-fit p-1 bg-gray-800 cursor-pointer rounded-full '>
                                                        <img src="https://static.vecteezy.com/system/resources/previews/045/934/243/non_2x/instagram-logo-icon-transparent-background-free-png.png" className='w-8 h-8' />
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>

                                    <div className=''>
                                        <div className='w-96 h-96 rounded-full border-4 border-emerald-400 flex justify-center items-center overflow-hidden'>
                                            <Image src="/myImage.jpg" alt="myImage" width={355} height={355} className='w-full h-full' />
                                        </div>
                                    </div>
                                </div>

                                <div className='w-3/5 flex justify-start items-center gap-20 mt-10 mx-auto'>
                                    <div className='flex jusce items-center gap-3'>
                                        <p className='text-6xl font-bold'> 2 </p>
                                        <div className='text-sm font-medium'>
                                            <p> years of </p>
                                            <p> experience </p>
                                        </div>
                                    </div>

                                    <div className='flex jusce items-center gap-3'>
                                        <p className='text-6xl font-bold'> 8 </p>
                                        <div className='text-sm font-medium'>
                                            <p> Projects </p>
                                            <p> completed </p>
                                        </div>
                                    </div>

                                    <div className='flex jusce items-center gap-3'>
                                        <p className='text-6xl font-bold'> 12 </p>
                                        <div className='text-sm font-medium'>
                                            <p> Technologies </p>
                                            <p> mastered </p>
                                        </div>
                                    </div>

                                    <div className='flex jusce items-center gap-3'>
                                        <p className='text-6xl font-bold'> 49 </p>
                                        <div className='text-sm font-medium'>
                                            <p> Code </p>
                                            <p> commits </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </motion.div>
                </AnimatePresence>
            </section>
        </>
    )
}
