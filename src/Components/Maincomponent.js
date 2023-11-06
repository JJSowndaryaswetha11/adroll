import React from 'react'
import '../Components/Maincomponent.css'
import bannerimage from '../Assets/image1.jpg'


const Maincomponent = () => {
  return (
    <div className='maindiv'>
     <div className='main-heading'>
        
        <img src={bannerimage} className='img_deg' alt=' bannerimage'></img>
       
       < h1>Smaller budgets need <br/> smarter dollars</h1>
        <p>Create, manage, and analyze your display, Facebook, Instagram,<br/> Pinterest, TikTok, and email campaigns from a single platform.<br/> AdRoll helps marketers do more with less.</p>
        <button className='get-started'>GET STARTED</button>
        <button className='get-in-touch'>GET IN TOUCH</button>
        </div>
        </div>
        
        
        
  )
}

export default Maincomponent

