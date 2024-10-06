import Image from 'next/image'
import React from 'react'

type service = {
    sno: number,
    title: string,
    description: string,
}

export default function ServiceComponent({ sno, title, description }: service) {
    return (
        <>
            <div className='w-[26rem] h-fit mb-10 bg-gray-800 px-7 py-3 rounded-xl border-b-4 border-gray-500 hover:border-b-4 hover:border-emerald-400 transition-all duration-500 group max-lg:w-[22rem]'>
                <div className='flex justify-between items-center'>
                    <p className='text-5xl font-bold group-hover:text-emerald-400 transition-all duration-500 max-lg:text-3xl max-xl:text-4xl'> 0{sno} </p>
                    <div className='w-12 h-12 rounded-full bg-white p-2 rotate-45 group-hover:bg-emerald-400 hover:rotate-0 transition-all duration-500 max-lg:w-10 max-lg:h-10'>
                        <Image src="/rightArrow.png" alt="arrow" width={50} height={50} />
                    </div>
                </div>
                <div className='mt-8'>
                    <h2 className='text-xl font-bold my-4 group-hover:text-emerald-400 transition-all duration-500 max-lg:text-sm'> {title} </h2>
                    <p className='text-sm font-semibold text-gray-400 max-lg:text-xs'> {description} </p>
                </div>
            </div>
        </>
    )
}
