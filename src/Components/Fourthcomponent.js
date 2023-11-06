import React from 'react'
import image from '../Assets/image3.png'
import '../Components/Fourthcomponent.css'
const Fourthcomponent = () => {
  return (
    <div className='main-headingss'>
        
        <img src={image} className='img_deg' alt=' bannerimage'></img>
       
       < h2>For 15 years, we've been the leader<br/> in helping our customers find their<br/> best customers</h2>
        <p>
        The AdRoll platform is powered by 15+ years of data from <br/>hundreds of thousands of brands and billions of shoppers. Let our<br/> expertise find the right customers for your business.
        </p>
        <a href=''>Learn more <span className='arrowss'>&rarr;</span></a>
        </div>
  )
}

export default Fourthcomponent