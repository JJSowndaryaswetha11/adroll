import React from 'react'
import image from '../Assets/image6.png'
import '../Components/Seventhcomponent.css'
const Seventhcomponent = () => {
  return (
    <div className='main-heads'>
        
        <img src={image} className='img_deg' alt=' bannerimage'></img>
       
       < h2>
       Experts to manage your advertising
       </h2>
        <p>
        Want to run effective campaigns but don’t have the bandwidth to <br/> manage different platforms? AdRoll managed services can be an <br/> extension of your marketing team, providing you with a dedicated<br/> platform expert to partner with, helping you and your team<br/> achieve your marketing goals and maximize return from your<br/> campaigns.
        </p>
        <a href=""> Get the support you deserve <span className='arrows'>&rarr;</span> </a>
       
        </div>
  )
}

export default Seventhcomponent