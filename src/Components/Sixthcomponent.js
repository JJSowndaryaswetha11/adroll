import React from 'react'
import image from '../Assets/image5.png'
import '../Components/Sixthcomponent.css'

const Sixthcomponent = () => {
  return (
    <div className='main-part'>
        
        <img src={image} className='img_deg' alt=' bannerimage'></img>
       
       < h2>Our retargeting and brand <br/>awareness ads make billions of<br/> correct choices every day</h2>
        <p>
        Our AI does what even the most savvy marketer alone cannot.<br/> Our powerful machine learning makes more predictions per second<br/> than the NASDAQ to attract the right customers to your site and<br/> get them buying again and again.
        </p>
        <a href=''>Explore retargeting ads<span className='arrowss'>&rarr;</span></a>
        <div>
            <a>Explore brand awareness ads<span className='arrowss'>&rarr;</span></a>
        </div>
        
        </div>
  )
}

export default Sixthcomponent