'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ResumeComponent from '../components/resumeComponent'
import Resume_SkillCard from '../components/resume_SkillCard'
import { motion } from 'framer-motion'

export default function Resume() {
    const [title, setTitle] = useState('Experience')

    const active = (title: string) => {
        setTitle(title)
    }

    return (
        <>
            <section className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 -z-10'>
                <div className='w-3/5 h-fit mt-20 flex justify-center items-start gap-10'>
                    <div className='w-96 h-full'>
                        <h1 className='text-3xl font-bold dancingFont'> Why hire me? </h1>
                        <p className='text-gray-400 text-sm my-10'> Here, you can check out my skills, experiences and about my education etc.  </p>
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <button className={title === 'Experience' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'} onClick={() => active('Experience')}> Experience </button>
                            <button className={title === 'Skills' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'} onClick={() => active('Skills')}> Skills </button>
                            <button className={title === 'Education' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'} onClick={() => active('Education')}> Education </button>
                            <button className={title === 'About Me' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'} onClick={() => active('About Me')}> About Me </button>
                        </div>
                    </div>

                    {
                        title === 'Experience' ? 
                            <ResumeComponent title='My Experience' description='Below is a detailed overview of my works and skills' cards={[{ date: '01-May-2024 - 30-September-2024', title: 'Full Stack Developer Intern', company: 'Optimus Technologies - Indonesia (Remote)' }]} /> : ''
                    }

                    {
                        title === 'Education' ?
                            <ResumeComponent title='My Education' description='Below is a detailed overview of my Education throughout my life.' cards={[{ date: '01-May-2024 - 30-September-2024', title: 'Full Stack Developer Intern', company: 'Optimus Technologies - Indonesia (Remote)' }, { date: '01-july-2022 - Present', title: 'BCA - Bachelor of Computer Applications', company: 'IGNOU - Indira Gandhi National Open University' }, { date: '01-May-2020 - 30-March-2022', title: 'Intermediate School', company: 'Govt. Boys Sr. Sec. High School (Tikona Park)' }]} /> : ''
                    }

                    {
                        title === 'Skills' ?
                            <div className='w-full h-full'>
                                <h1 className='text-3xl font-bold dancingFont'> My Skills </h1>
                                <p className='text-gray-400 text-sm my-10 -z-10'> Below you can see my various skills domain, which i have worked on. </p>
                                <div className='customScroll overflow-y-scroll w-full h-96 flex flex-wrap justify-start items-start gap-7'>
                                    <Resume_SkillCard title='HTML' img='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png' />
                                    <Resume_SkillCard title='CSS' img='https://img.icons8.com/color/512/css3.png' />
                                    <Resume_SkillCard title='Tailwind CSS' img='https://plugins.jetbrains.com/files/15321/609905/icon/pluginIcon.png' />
                                    <Resume_SkillCard title='JavaScript' img='https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png' />
                                    <Resume_SkillCard title='TypeScript' img='https://www.svgrepo.com/show/374144/typescript.svg' />
                                    <Resume_SkillCard title='React.js' img='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
                                    <Resume_SkillCard title='Next.js' img='https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default' />
                                    <Resume_SkillCard title='Angular' img='https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png' />
                                    <Resume_SkillCard title='NodeJs' img='https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256' />
                                    <Resume_SkillCard title='ExpressJs' img='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' />
                                    <Resume_SkillCard title='FastAPI' img='https://cdn.worldvectorlogo.com/logos/fastapi.svg' />
                                    <Resume_SkillCard title='MongoDB' img='https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg' />
                                    <Resume_SkillCard title='PostgreSQL' img='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png' />
                                    <Resume_SkillCard title='Java' img='https://static-00.iconduck.com/assets.00/java-original-icon-1510x2048-qvtt7tr9.png' />
                                    <Resume_SkillCard title='C++' img='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' />

                                </div>
                            </div>
                            : ''
                    }

                    {
                        title === 'About Me' ?
                            <div className='w-full h-full'>
                                <h1 className='text-3xl font-bold dancingFont'> About Me </h1>
                                <p className='text-gray-400 text-sm my-10 -z-10'> My Introduction  </p>
                                <div className='customScroll overflow-y-scroll w-full h-48 flex flex-wrap justify-start items-start'>
                                    <div className='w-5/6 flex justify-between items-start'>
                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Name </p>
                                            <p className='font-semibold text-gray-300 text-sm'> Suraj kumar jha </p>
                                        </div>

                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Phone </p>
                                            <p className='font-semibold text-gray-300 text-sm'> (+91) 8595917205 </p>
                                        </div>
                                    </div>
                                    <div className='w-5/6 flex justify-between items-start'>
                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Experience </p>
                                            <p className='font-semibold text-gray-300 text-sm'> 6 months </p>
                                        </div>

                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Email </p>
                                            <p className='font-semibold text-gray-300 text-sm'> surajkumarjha747@gmail.com </p>
                                        </div>
                                    </div>
                                    <div className='w-5/6 flex justify-between items-start'>
                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Nationality </p>
                                            <p className='font-semibold text-gray-300 text-sm'> Indian </p>
                                        </div>

                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Languages </p>
                                            <p className='font-semibold text-gray-300 text-sm'> English, Hindi </p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                    }

                </div>
            </section >
        </>
    )
}
