'use client'
import React, { useState } from 'react'
import WorkComponent from '../components/workComponent'

export default function Work() {
  const snoArray = [1,2,3]
  const titleArray = ['eventStream', 'Chantin-Go', 'BumbleBee - Construction App.']
  const descriptionArray = ['It is a full stack event management app which handles events creation, booking, liked events and have payment gateway integrated also.', 'It is a full stack event management app which handles events creation, booking, liked events and have payment gateway integrated also.', 'It is a full stack event management app which handles events creation, booking, liked events and have payment gateway integrated also.']
  const TechnologiesArray = ['Angular, FastAPI, PostgreSQL, TypeScript, Tailwind CSS', 'NextJs, ExpressJs, MongoDB, TypeScript, Tailwind CSS', 'NextJS, FastAPI, PostgreSQL, Tailwind CSS, Material UI']
  const ImageArray = ['/eventStream.png', '/chatApp.png', '/BumbleBee.png']
  const gitHubLink = ['https://github.com/Surajkumarjha07/eventStream','https://github.com/Surajkumarjha07/Chat-App','']
  const appLink = ['','','']

  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  const previous = () => {
    setIndex(prev => prev>0? prev-1 : prev)
    setAnimate(true) 
  }

  const next = () => {
    setIndex(prev => prev<snoArray.length-1? prev+1: prev)
    setAnimate(true)
  }

  return (
    <>
      <section className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 -z-10'>
        <div className='w-3/5 h-fit mt-20 flex justify-center items-start max-xl:w-screen max-xl:px-4 max-md:flex-col max-xl:items-center max-md:mt-[36rem]'>
          <WorkComponent sno={snoArray[index]} title={titleArray[index]} description={descriptionArray[index]} technologies={TechnologiesArray[index]} img={ImageArray[index]} previous={previous} gitHubLink={gitHubLink[index]} appLink={appLink[index]} next={next}/>
        </div>
      </section>
    </>
  )
}
