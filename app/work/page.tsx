'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import WorkComponent from '../components/workComponent'

export default function Work() {
  const snoArray = [1,2,3]
  const titleArray = ['eventStream', 'Chantin-Go', 'BumbleBee - Construction App.']
  const descriptionArray = ['It is a full stack event management app which handles events creation, booking, liked events and have payment gateway integrated also.', 'It is a full stack event management app which handles events creation, booking, liked events and have payment gateway integrated also.', 'It is a full stack event management app which handles events creation, booking, liked events and have payment gateway integrated also.']
  const TechnologiesArray = ['Angular, FastAPI, PostgreSQL, TypeScript, Tailwind CSS', 'NextJs, ExpressJs, MongoDB, TypeScript, Tailwind CSS', 'NextJS, FastAPI, PostgreSQL, Tailwind CSS, Material UI']
  const ImageArray = ['https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg', 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg', 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg', 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg']

  const [index, setIndex] = useState(0)


  const previous = () => {
    setIndex(prev => prev>0? prev-1 : prev) 
  }

  const next = () => {
    setIndex(prev => prev<snoArray.length-1? prev+1: prev)
  }

  return (
    <>
      <section className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 -z-10'>
        <div className='w-3/5 flex justify-center items-start'>
          <WorkComponent sno={snoArray[index]} title={titleArray[index]} description={descriptionArray[index]} technologies={TechnologiesArray[index]} img={ImageArray[index]} previous={previous} next={next}/>
        </div>
      </section>
    </>
  )
}
