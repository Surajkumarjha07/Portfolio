'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type work = {
    sno: number,
    title: string,
    description: string,
    technologies: string,
    img: string,
    gitHubLink: string,
    appLink: string,
    previous: () => void,
    next: () => void
}

export default function WorkComponent({ sno, title, description, technologies, img, gitHubLink, appLink, previous, next }: work) {
    const [anime, setanime] = useState(false)
    useEffect(() => {
        setanime(true)
    }, [img])

    return (
        <>
            {
                <>
                    <div className='w-1/2 h-full pr-8 flex flex-col justify-start items-start gap-8 max-md:w-full max-md:pr-0 max-md:mb-7'>
                        <p className='text-4xl font-bold'> 0{sno} </p>
                        <p className='text-3xl font-extrabold'> {title} </p>
                        <p className='text-sm font-semibold text-gray-400'> {description} </p>
                        <p className='text-sm font-bold text-emerald-400'> {technologies} </p>
                        <hr className='w-full h-1 border-none rounded-full bg-emerald-400' />
                        <div className='flex justify-start items-center gap-10'>
                            <Link href={appLink}>
                                <button className='w-12 h-12 rounded-full bg-white p-2 -rotate-45 hover:bg-emerald-400 hover:rotate-0 transition-all duration-500'>
                                    <Image src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png" alt="arrow" width={50} height={50} />
                                </button>
                            </Link>

                            <Link href={gitHubLink}>
                                <button className='bg-gradient-to-b from-black to-white rounded-full p-[2px]'>
                                    <div className='w-fit h-fit p-1 bg-gray-800 cursor-pointer rounded-full '>
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='w-8 h-8' />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='w-1/2 h-full flex flex-col justify-between items-end max-md:w-full'>
                        {
                            anime ?
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        initial={{ y: 0, x: 100, opacity: 0 }}
                                        animate={{ y: 0, x: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.7 }}
                                        className='w-full flex justify-center items-center'
                                        onAnimationEnd = {() => setanime(false)}
                                    >
                                        <Image src={img} alt="myImage" width={355} height={355} className='w-full h-80 rounded-xl' />
                                    </motion.div>
                                </AnimatePresence> : ''
                        }
                        <div className='flex justify-end items-center gap-5 my-10'>
                            <button className='flex justify-center items-center bg-emerald-400 p-1' onClick={previous}>
                                <Image src={'https://cdn-icons-png.flaticon.com/512/109/109618.png'} alt='left arrow' width={25} height={25} />
                            </button>

                            <button className='flex justify-center items-center bg-emerald-400 p-1' onClick={next}>
                                <Image src={'https://cdn-icons-png.flaticon.com/512/109/109617.png'} alt='right arrow' width={25} height={25} />
                            </button>
                        </div>
                    </div> </>
            }
        </>
    )
}
