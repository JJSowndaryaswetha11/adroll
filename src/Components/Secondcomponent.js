import React from 'react'
import '../Components/Secondcomponent.css'
import image from '../Assets/image2.jpg'


const Secondcomponent = () => {
  return (
    <div className='main-headings'>
        
        <img src={image} className='img_deg' alt=' bannerimage'></img>
       
       < h2>Adroll works for the<br/>marketing newbie</h2>
        <p>
        Our industry-first automation builder gives you full control of <br/>campaigns across display, social, and email — all from one place.
        </p>
        <a href=""> Explore automation better <span className='arrows'>&rarr;</span> </a>
       
        </div>



    
  )
}

export default Secondcomponent