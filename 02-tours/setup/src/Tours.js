import React, { useEffect, useState } from 'react'
import Tour from './Tour'

const Tours = (props) => {
  const { tours, removeTour } = props

  return (
    <>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => (
        <Tour tour={tour} tours={tours} removeTour={removeTour} key={tour.id} />
      ))}
    </>
  )
}

export default Tours
