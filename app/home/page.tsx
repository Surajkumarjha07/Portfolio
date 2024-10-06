'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
    const [experience, setExperience] = useState(0)
    const [projects, setProjects] = useState(0)
    const [technologies, setTechnologies] = useState(0)
    const [commits, setCommits] = useState(0)

    const increaseExperience = (index: number) => {
        for (let i = 0; i <= index; i++) {
            setTimeout(() => {
                setExperience(i)
            }, i * 500);
        }
    }

    const increaseProjects = (index: number) => {
        let totalDelay = 0;

        for (let i = 0; i <= index; i++) {
            const delay = i > index - 4 ? 300 : 100;

            setTimeout(() => {
                setProjects(i);
            }, totalDelay);

            totalDelay += delay;
        }
    }

    const increaseTechnologies = (index: number) => {
        let totalDelay = 0;

        for (let i = 0; i <= index; i++) {
            const delay = i > index - 4 ? 400 : 150;

            setTimeout(() => {
                setTechnologies(i);
            }, totalDelay);

            totalDelay += delay;
        }

    }

    const increaseCommits = (index: number) => {
        let totalDelay = 0;

        for (let i = 0; i <= index; i++) {
            const delay = i > index - 10 ? 120 : 40;

            setTimeout(() => {
                setCommits(i);
            }, totalDelay);

            totalDelay += delay;
        }
    };

    useEffect(() => {
        increaseExperience(2)
        increaseProjects(10)
        increaseTechnologies(12)
        increaseCommits(61)
    }, [])


    return (
        <>
            <section className='w-full h-screen flex flex-col justify-start items-center absolute top-28 bottom-0 left-0 right-0 -z-10'>
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {
                            <>
                                <div className='w-3/5 h-fit mx-auto flex justify-between items-center max-xl:justify-center max-[428px]:flex-col max-lg:w-full max-md:px-2 max-xl:gap-7 max-xl:w-full'>
                                    <div className='w-1/2 max-md:w-full max-xl:w-1/2'>
                                        <p className='text-lg font-bold max-xl:text-sm'> Software Developer | Web-Application Developer </p>
                                        <p className='text-6xl font-bold mt-1 max-xl:text-3xl'> Hello I&apos;m </p>
                                        <p className='text-5xl font-bold text-emerald-400 dancingFont mt-2 mb-4 max-xl:text-2xl'> Suraj kumar jha </p>
                                        <p className='text-sm font-semibold text-gray-300 max-sm:text-xs'> Full Stack Web Application and Software Developer with expertise in designing and developing end-to-end solutions. Skilled in both front-end and back-end technologies, I create efficient, secure, and user-friendly applications. Passionate about transforming ideas into functional software that drives business success. </p>

                                        <div className='flex justify-start items-center gap-10 my-10 max-md:gap-5 max-md:justify-center'>
                                            <a href={'/My_Resume.docx'} download="SurajKumarJha">
                                                <button className='flex justify-center items-center text-sm gap-4 font-bold bg-emerald-400 text-gray-950 border-2 border-emerald-400 px-4 py-2 rounded-full max-md:px-3 max-[350px]:py-1 max-sm:text-xs max-lg:gap-2'> Download CV <Image src="/download.png" alt='' width={20} height={20} className='max-md:w-4 max-md:h-4' /> </button>
                                            </a>

                                            <Link href={'https://www.linkedin.com/in/suraj-kumar-jha-1946712aa/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FERbeHxIS3K7JbSxh3caGQ%3D%3D'}>
                                                <div className='bg-gradient-to-b from-sky-700 to-white rounded-full p-[2px]'>
                                                    <div className='w-fit h-fit p-1 bg-gray-800 cursor-pointer rounded-full '>
                                                        <Image src="/linkedIn.webp" className='w-8 h-8' alt='LinkedIn' width={100} height={100} />
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href={'https://github.com/dashboard'}>
                                                <div className='bg-gradient-to-b from-black to-white rounded-full p-[2px]'>
                                                    <div className='w-fit h-fit p-1 bg-gray-800 cursor-pointer rounded-full '>
                                                        <Image src="/github.png" className='w-8 h-8' alt='github' width={100} height={100} />
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href={'https://www.instagram.com/'}>
                                                <div className='bg-gradient-to-b from-pink-700 via-white to-violet-700 rounded-full p-[2px]'>
                                                    <div className='w-fit h-fit p-1 bg-gray-800 cursor-pointer rounded-full '>
                                                        <Image src="/instagram.webp" className='w-8 h-8' alt='instagram' width={100} height={100} />
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>

                                    <div className='w-1/2 flex justify-center items-center max-xl:w-fit'>
                                        <div className='w-96 h-96 rounded-full border-4 border-emerald-400 flex justify-center items-center overflow-hidden max-md:w-48 max-md:h-48 max-xl:w-72 max-xl:h-72'>
                                            <Image src="/myImage.jpg" alt="myImage" width={1000} height={1000} className='w-full h-full' />
                                        </div>
                                    </div>
                                </div>

                                <div className='w-3/5 flex justify-start items-center gap-20 mt-10 mx-auto max-md:flex-wrap max-md:gap-4 max-md:justify-between max-md:w-full max-md:px-2 pb-10 max-xl:justify-between max-xl:w-full max-xl:px-4'>
                                    <div className='flex justify-center items-center gap-3'>
                                        <p className='text-6xl font-bold max-md:text-3xl'> {experience} </p>
                                        <div className='text-sm font-medium max-md:text-[10px]'>
                                            <p> years of </p>
                                            <p> experience </p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-3'>
                                        <p className='text-6xl font-bold max-md:text-3xl'> {projects} </p>
                                        <div className='text-sm font-medium max-md:text-[10px]'>
                                            <p> Projects </p>
                                            <p> completed </p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-3'>
                                        <p className='text-6xl font-bold max-md:text-3xl'> {technologies} </p>
                                        <div className='text-sm font-medium max-md:text-[10px]'>
                                            <p> Technologies </p>
                                            <p> mastered </p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-3'>
                                        <p className='text-6xl font-bold max-md:text-3xl'> {commits} </p>
                                        <div className='text-sm font-medium max-md:text-[10px]'>
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
