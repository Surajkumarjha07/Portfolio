'use client'
import Image from 'next/image'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Services() {
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
                <div className='w-3/5 h-fit mt-20 mx-auto flex justify-between items-center flex-wrap max-md:mt-[35rem] max-md:px-3 max-md:justify-center max-lg:justify-between max-xl:w-screen max-xl:px-4 max-[1100px]:mt-20'>

                  <div className='w-[26rem] h-fit mb-10 bg-gray-800 px-7 py-3 rounded-xl border-b-4 border-gray-500 hover:border-b-4 hover:border-emerald-400 transition-all duration-500 group max-lg:w-[22rem]'>
                    <div className='flex justify-between items-center'>
                      <p className='text-5xl font-bold group-hover:text-emerald-400 transition-all duration-500 max-lg:text-3xl max-xl:text-4xl'> 01 </p>
                      <div className='w-12 h-12 rounded-full bg-white p-2 rotate-45 group-hover:bg-emerald-400 hover:rotate-0 transition-all duration-500 max-lg:w-10 max-lg:h-10'>
                        <Image src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png" alt="arrow" width={50} height={50} />
                      </div>
                    </div>
                    <div className='mt-8'>
                      <h2 className='text-xl font-bold my-4 group-hover:text-emerald-400 transition-all duration-500 max-lg:text-sm'> Software Development </h2>
                      <p className='text-sm font-semibold text-gray-400 max-lg:text-xs'> I excel in developing software solutions that are meticulously designed to align with business requirements.   </p>
                    </div>
                  </div>

                  <div className='w-[26rem] h-fit mb-10 bg-gray-800 px-7 py-3 rounded-xl border-b-4 border-gray-500 hover:border-b-4 hover:border-emerald-400 transition-all duration-500 group max-lg:w-[22rem]'>
                    <div className='flex justify-between items-center'>
                      <p className='text-5xl font-bold group-hover:text-emerald-400 transition-all duration-500 max-lg:text-3xl max-xl:text-4xl'> 02 </p>
                      <div className='w-12 h-12 rounded-full bg-white p-2 rotate-45 group-hover:bg-emerald-400 hover:rotate-0 transition-all duration-500 max-lg:w-10 max-lg:h-10'>
                        <Image src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png" alt="arrow" width={50} height={50} />
                      </div>
                    </div>
                    <div className='mt-8'>
                      <h2 className='text-xl font-bold my-4 group-hover:text-emerald-400 transition-all duration-500 max-lg:text-sm'> Full Stack Web Development </h2>
                      <p className='text-sm font-semibold text-gray-400 max-lg:text-xs'> I specialize in developing full stack web applications that are scalable, robust, and tailored to meet the unique needs of businesses. </p>
                    </div>
                  </div>

                  <div className='w-[26rem] h-fit mb-10 bg-gray-800 px-7 py-3 rounded-xl border-b-4 border-gray-500 hover:border-b-4 hover:border-emerald-400 transition-all duration-500 group max-lg:w-[22rem]'>
                    <div className='flex justify-between items-center'>
                      <p className='text-5xl font-bold group-hover:text-emerald-400 transition-all duration-500 max-lg:text-3xl max-xl:text-4xl'> 03 </p>
                      <div className='w-12 h-12 rounded-full bg-white p-2 rotate-45 group-hover:bg-emerald-400 hover:rotate-0 transition-all duration-500 max-lg:w-10 max-lg:h-10'>
                        <Image src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png" alt="arrow" width={50} height={50} />
                      </div>
                    </div>
                    <div className='mt-8'>
                      <h2 className='text-xl font-bold my-4 group-hover:text-emerald-400 transition-all duration-500 max-lg:text-sm'> Mobile-App Development </h2>
                      <p className='text-sm font-semibold text-gray-400 max-lg:text-xs'> I create cross-platform solutions that meet the specific needs of businesses, ensuring functionality, performance, and user satisfaction.  </p>
                    </div>
                  </div>

                  <div className='w-[26rem] h-fit mb-10 bg-gray-800 px-7 py-3 rounded-xl border-b-4 border-gray-500 hover:border-b-4 hover:border-emerald-400 transition-all duration-500 group max-lg:w-[22rem]'>
                    <div className='flex justify-between items-center'>
                      <p className='text-5xl font-bold group-hover:text-emerald-400 transition-all duration-500 max-lg:text-3xl max-xl:text-4xl'> 04 </p>
                      <div className='w-12 h-12 rounded-full bg-white p-2 rotate-45 group-hover:bg-emerald-400 hover:rotate-0 transition-all duration-500 max-lg:w-10 max-lg:h-10'>
                        <Image src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png" alt="arrow" width={50} height={50} />
                      </div>
                    </div>
                    <div className='mt-8'>
                      <h2 className='text-xl font-bold my-4 group-hover:text-emerald-400 transition-all duration-500 max-lg:text-sm'> API Development / Integration  </h2>
                      <p className='text-sm font-semibold text-gray-400 max-lg:text-xs'> I specialize in designing and implementing robust APIs that facilitate seamless communication between applications.  </p>
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
