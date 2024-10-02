import React from 'react'

type resumeCard = {
    date: string,
    title: string,
    company: string
}

export default function ResumeCards({date, title, company}: resumeCard) {
    return (
        <>
            <div className='w-[18rem] flex flex-col gap-4 justify-start min-h-40 px-5 py-4 rounded-xl bg-gray-700 transition-all duration-500 group'>
                <div className='flex justify-between items-center'>
                    <p className='text-xs font-bold text-emerald-400 transition-all duration-500'> {date} </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold my-4 group-hover:text-emerald-400 transition-all duration-500'> {title} </h2>
                    <p className='text-xs font-semibold text-gray-400'> <span> • </span> {company}  </p>
                </div>
            </div>
        </>
    )
}