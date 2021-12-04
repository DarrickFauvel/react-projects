import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const handleNext = () => {
    if (index === people.length - 1) {
      setIndex(0)
    } else {
      setIndex((prevState) => prevState + 1)
    }
  }

  const handlePrev = () => {
    if (index === 0) {
      setIndex(people.length - 1)
    } else {
      setIndex((prevState) => prevState - 1)
    }
  }

  const handleRandomReview = () => {
    const randomId = Math.floor(Math.random() * people.length)
    if (randomId === index) {
      handleNext()
    } else {
      setIndex(randomId)
    }
  }

  return (
    <article className='review' key={index}>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={handleRandomReview}>
        surprise me
      </button>
    </article>
  )
}

export default Review
