import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='title-underline'></div>
        </div>
        <div className='tours'>
      {tours.map((item) => {
        return (
            <Tour key={item.id} {...item} removeTour={removeTour}></Tour>
        )
      })}
      </div>
    </section>
  )
}

export default Tours
