'use client'
import React, { useState } from 'react'
import ResumeComponent from '../components/resumeComponent'
import Resume_SkillCard from '../components/resume_SkillCard'

export default function Resume() {
    const [title, setTitle] = useState('Experience')

    const active = (title: string) => {
        setTitle(title)
    }

    return (
        <>
            <section className='w-screen h-screen flex flex-col justify-start items-center absolute top-28 bottom-0 left-0 right-0 -z-10'>
                <div className='w-3/5 h-fit flex justify-center items-start gap-10 max-xl:flex-col max-xl:w-screen'>
                    <div className='w-96 h-full max-xl:w-screen max-xl:px-4'>
                        <h1 className='text-3xl font-bold dancingFont'> Why hire me? </h1>
                        <p className='text-gray-400 text-sm my-10'> Here, you can check out my skills, experiences and about my education etc.  </p>
                        <div className='flex flex-col items-center justify-center gap-5 max-xl:flex-row max-xl:flex-wrap max-xl:justify-start max-xl:gap-2'>
                            <button className={`max-xl:w-fit max-xl:px-2 ${title === 'Experience' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'}`} onClick={() => active('Experience')}> Experience </button>
                            <button className={`max-xl:w-fit max-xl:px-2 ${title === 'Skills' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'}`} onClick={() => active('Skills')}> Skills </button>
                            <button className={`max-xl:w-fit max-xl:px-2 ${title === 'Education' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'}`} onClick={() => active('Education')}> Education </button>
                            <button className={`max-xl:w-fit max-xl:px-2 ${title === 'About Me' ? 'text-gray-800 font-semibold bg-emerald-200 w-full h-fit py-2 rounded-lg' : 'text-gray-800 font-semibold bg-emerald-500 w-full h-fit py-2 rounded-lg'}`} onClick={() => active('About Me')}> About Me </button>
                        </div>
                    </div>

                    {
                        title === 'Experience' ?
                            <ResumeComponent title='My Experience' description='Below is a comprehensive overview of my experience.' cards={[{ date: '01-May-2024 - 30-September-2024', title: 'Full Stack Developer Intern', company: 'Optimus Technologies - Indonesia (Remote)' }]} /> : ''
                    }

                    {
                        title === 'Education' ?
                            <ResumeComponent title='My Education' description='Below is a comprehensive overview of my educational background.' cards={[{ date: '01-May-2024 - 30-September-2024', title: 'Full Stack Developer Intern', company: 'Optimus Technologies - Indonesia (Remote)' }, { date: '01-july-2022 - Present', title: 'BCA - Bachelor of Computer Applications', company: 'IGNOU - Indira Gandhi National Open University' }, { date: '01-May-2020 - 30-March-2022', title: 'Intermediate School', company: 'Govt. Boys Sr. Sec. High School (Tikona Park)' }]} /> : ''
                    }

                    {
                        title === 'Skills' ?
                            <div className='w-full h-full max-xl:px-4'>
                                <h1 className='text-3xl font-bold dancingFont'> My Skills </h1>
                                <p className='text-gray-400 text-sm my-10 -z-10'> Below are the various skill domains I have worked in. </p>
                                <div className='customScroll overflow-y-scroll w-full h-96 flex flex-wrap justify-start items-start gap-7 max-xl:pb-4'>
                                    <Resume_SkillCard title='HTML' img='/html.png' />
                                    <Resume_SkillCard title='CSS' img='/css.png' />
                                    <Resume_SkillCard title='Tailwind CSS' img='/tailwindCSS.png' />
                                    <Resume_SkillCard title='JavaScript' img='/javaScript.webp' />
                                    <Resume_SkillCard title='TypeScript' img='/typescript.svg' />
                                    <Resume_SkillCard title='React.js' img='/React.webp' />
                                    <Resume_SkillCard title='Next.js' img='/nextjs.png' />
                                    <Resume_SkillCard title='Angular' img='/angular.png' />
                                    <Resume_SkillCard title='NodeJs' img='/nodeJs.webp' />
                                    <Resume_SkillCard title='ExpressJs' img='/express.webp' />
                                    <Resume_SkillCard title='FastAPI' img='/fastapi.svg' />
                                    <Resume_SkillCard title='MongoDB' img='/mongoDB.svg' />
                                    <Resume_SkillCard title='PostgreSQL' img='/PostgreSQL.png' />
                                    <Resume_SkillCard title='Java' img='/Java.png' />
                                    <Resume_SkillCard title='C++' img='/c++.png' />

                                </div>
                            </div>
                            : ''
                    }

                    {
                        title === 'About Me' ?
                            <div className='w-full h-full max-xl:px-4'>
                                <h1 className='text-3xl font-bold dancingFont'> About Me </h1>
                                <p className='text-gray-400 text-sm my-10 -z-10'> Below are my contact details.  </p>
                                <div className='customScroll overflow-y-scroll w-full h-48 flex flex-wrap justify-start items-start max-sm:h-fit'>
                                    <div className='w-5/6 flex justify-between items-start max-md:flex-col max-md:gap-4 max-md:my-5'>
                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Name </p>
                                            <p className='font-semibold text-gray-300 text-sm'> Suraj kumar jha </p>
                                        </div>

                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Phone </p>
                                            <p className='font-semibold text-gray-300 text-sm'> (+91) 8595917205 </p>
                                        </div>
                                    </div>
                                    <div className='w-5/6 flex justify-between items-start max-md:flex-col max-md:gap-4 max-md:my-5'>
                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Experience </p>
                                            <p className='font-semibold text-gray-300 text-sm'> 6 months </p>
                                        </div>

                                        <div className='flex justify-start gap-6 w-60'>
                                            <p className='font-semibold text-gray-400 text-sm'> Email </p>
                                            <p className='font-semibold text-gray-300 text-sm'> surajkumarjha747@gmail.com </p>
                                        </div>
                                    </div>
                                    <div className='w-5/6 flex justify-between items-start max-md:flex-col max-md:gap-4 max-md:my-5'>
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
