import React from 'react'
import { motion } from 'framer-motion'

type resumeCard = {
    date: string,
    title: string,
    company: string
}

export default function ResumeCards({ date, title, company }: resumeCard) {
    return (
        <>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 14,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}>
                <div className='w-[18rem] h-40 flex flex-col justify-start gap-2 px-5 py-4 rounded-xl bg-gray-700 transition-all duration-500 group'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xs font-bold text-emerald-400 transition-all duration-500'> {date} </p>
                    </div>
                    <div className='h-full flex flex-col justify-between'>
                        <h2 className='text-lg font-bold my-2 group-hover:text-emerald-400 transition-all duration-500'> {title} </h2>
                        <p className='text-xs font-semibold text-gray-400'> <span> • </span> {company}  </p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
