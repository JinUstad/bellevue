import React from 'react'
import Img from '../Assests/heroImage.jpg'
function HeroImage() {
  return (
    <>
            <div className='heroImage25_2022' >
                    <img src={Img}/>
                    <h1>JUNIOR SUITE</h1>
                    <button>Reserve this room</button>
            </div>
    </>
  )
}

export default HeroImage