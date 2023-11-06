import React from 'react'
import image from '../Assets/image4.png'
import '../Components/Fifthcomponent.css'

const Fifthcomponent = () => {
  return (
    <div className='main-head'>
        
        <img src={image} className='img_deg' alt=' bannerimage'></img>
       
       < h2>
       Save time and energy by running all<br/> your campaigns across millions of<br/> websites and mobile apps — from<br/> one place
       </h2>
        <p>
        When we say one-stop shop, we mean one-stop. Launch, pause,<br/> and edit ad campaigns across all the places you want to advertise,<br/> plus use that data to see your campaigns holistically and make<br/> improvements.
        </p>
        <a href=""> Explore automation better <span className='arrows'>&rarr;</span> </a>
       
        </div>
  )
}

export default Fifthcomponent