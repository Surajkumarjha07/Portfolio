import React from 'react'
import ResumeCards from './resumeCards'

type cards = {
  date: string,
  title: string,
  company: string
}

type resume = {
  title: string,
  description: string | '',
  cards: cards[]
}

export default function ResumeComponent({ title, description, cards }: resume) {
  return (
    <>
      <div className='w-full h-full max-xl:px-4'>
        <h1 className='text-3xl font-bold dancingFont'> {title} </h1>
        <p className='text-gray-400 text-sm my-10'> {description} </p>
        <div className='customScroll overflow-y-scroll overflow-x-hidden w-full h-fit max-h-96 pb-4 flex flex-wrap justify-between items-start gap-10'>
          {
            cards.map((card, index) => (
              <ResumeCards key={index} date={card.date} title={card.title} company={card.company} />
            ))
          }
        </div>
      </div>
    </>
  )
}
