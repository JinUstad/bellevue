import React from 'react'
import hotel from '../Assests/hotel_demo.jpg'
function Star() {
  return (
      <>
    <div className='star'>
        <div className='container'>
            <div className='Star_26_4_2022 text-center'>
                <h2 className='mb-3 text-white'>Our stay was amazing. We will be returning again.</h2>
                <p >⭐⭐⭐⭐⭐</p>
                <img src={hotel}/>
                <span className='ml-3 '>Amy Johnson</span>
            </div>
        </div>
    </div>
      </>
  )
}

export default Star