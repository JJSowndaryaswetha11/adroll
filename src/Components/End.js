import React from 'react';
import image from '../Assets/logo1.svg';
import '../Components/End.css'; // Ensure the correct path to your CSS file
import image3 from '../Assets/rollworks.svg'
import image2 from '../Assets/adroll.svg';
import image4 from '../Assets/your-privacy-choices.png'

const End = () => {
  return (
    <div>
    <div className="end-container">
      <div className="image-container">
        <img src={image} alt="Logo" width={135} height={20} />
      </div>
      
    
  
    </div>
    <div className='image-container'>
    <img src={image2} alt="Logo" width={135} height={20} />
    <img src={image3} alt="Logo" width={135} height={20} />
    <p>NextRoll is as an equal opportunity employer.</p>
    <a href=''> We stand alongside organizations that support our Rollers and Community</a>
    <div className='list'>
        <ul>
            <li><a href=''>Carrers</a></li>
            <li><a href=''>Trust center</a></li>
            <li><a href=''>Terms of service</a></li>
            <li><a href=''>Website Terms of use</a></li>
            <li><a href=''>Privacy Notice</a></li>
            <li><a href=''>Infringement policy</a></li>
            <li><a href=''>Ad opt out</a></li>
            <li><a href=''>CCPA Notice at collection</a></li>
            <li><a href=''>Adchoices</a></li>
        </ul>

        <p>Your privacy Choices<img src={image4} width={20} height={10}></img></p>
        <button className='information'> Donot Sell or share my personal information</button>
    </div> 
    </div>
    </div>
    
  );
}

export default End;


