import Image from 'next/image'
import React from 'react'
import WorkComponent from '../components/workComponent'

export default function Work() {

  const previous = () => {

  }

  const next = () => {

  }

  return (
    <>
      <section className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 -z-10'>
        <div className='w-3/5 flex justify-center items-start'>
          <WorkComponent sno={1} title='eventStream' description='It is a full stack event management app which handles events creation, booking, liked events and have payment gateway integrated also.' technologies='Angular, FastAPI, PostgreSQL, TypeScript' img='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'/>
        </div>
      </section>
    </>
  )
}
