'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ServiceComponent from '../components/service'

export default function Services() {
  return (
    <>
      <section className='w-screen h-screen flex flex-col justify-start items-center absolute top-28 bottom-0 left-0 right-0 -z-10'>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {
              <>
                <div className='w-3/5 h-fit mx-auto flex justify-between items-center flex-wrap max-md:px-3 max-md:justify-center max-lg:justify-between max-xl:w-screen max-xl:px-4'>

                  <ServiceComponent sno={1} title='Software Development' description='I excel in developing software solutions that are meticulously designed to align with business requirements.'/>

                  <ServiceComponent sno={2} title='Full Stack Web Development' description='I specialize in developing full stack web applications that are scalable, robust, and tailored to meet the unique needs of businesses.'/>

                  <ServiceComponent sno={3} title='Mobile-App Development' description='I create cross-platform solutions that meet the specific needs of businesses, ensuring functionality, performance, and user satisfaction.'/>

                  <ServiceComponent sno={4} title='API Development / Integration' description='I specialize in designing and implementing robust APIs that facilitate seamless communication between applications.'/>

                </div>
              </>
            }
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  )
}
