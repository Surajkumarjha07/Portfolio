import React from 'react'

type skillCard = {
    title: string,
    img: string
}

export default function Resume_SkillCard({ title, img }: skillCard) {
    return (
        <>
            <div className='flex flex-col gap-4 group'>
                <div className='bg-white text-gray-700 text-center font-extrabold rounded-md text-xs px-3 w-fit mx-auto py-1 opacity-0 group-hover:opacity-100 transition-all duration-500'> {title} </div>
                <div className='p-8 flex justify-center items-center bg-gray-700 rounded-md'>
                    <img src={img} alt="Image" className='w-14 h-14' />
                </div>
            </div>
        </>
    )
}
