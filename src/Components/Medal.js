import React from 'react'
import image1 from '../Assets/medal.svg'
import image2 from '../Assets/perfomer.svg'
import image3 from '../Assets/meet.svg'
import image4 from '../Assets/user.svg'
import '../Components/Medal.css'
const Medal = () => {
  return (
    <div className='wholeimages'>
      <div >
        <img src={image1}></img>
      </div>
      <div>
        <img src={image2}></img>
      </div>
      <div>
        <img src={image3}></img>
      </div>
      <div>
        <img src={image4}></img>
      </div>
      
    </div>
  )
}

export default Medal