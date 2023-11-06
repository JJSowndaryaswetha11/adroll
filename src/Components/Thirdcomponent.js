import React from 'react'
import image1 from '../Assets/pngimage1.png'
import image2 from '../Assets/pngimage2.png'
import image3 from '../Assets/pngimage3.png'
import image4 from '../Assets/pngimage4.png'
import image5 from '../Assets/pngimage5.png'
import image6 from '../Assets/pngimage6.png'
import '../Components/Thirdcomponent.css'
const Thirdcomponent = () => {
  return (
    <div className='wholeimage'>
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
      <div>
        <img src={image5}></img>
      </div>
      <div>
        <img src={image6}></img>
      </div>
    </div>
  )
}

export default Thirdcomponent
