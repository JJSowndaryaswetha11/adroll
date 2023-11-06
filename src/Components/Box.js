import React from 'react';
import '../Components/Box.css';
import image from '../Assets/image7.png';
import image2 from '../Assets/pink.svg';

const Box = () => {
  return (
    <div className='box-container'>
      <div className='box'>
        <div className='content'>
          <img src={image} alt='volcanologo' width={150} height={128} />
          <p>
            "Since last year, <b>our revenue has</b><br/> <b>increased 191%, our attributed</b><br/><b> conversions 177%,</b> and our <b>engagement<br/> 33%</b>. We’re reaching and converting<br/> customers higher in the funnel."
          </p>
        </div>
        <div className='second'>
          <div>
            <p className='para1'>AdRoll customers make</p>
            <h3>$165B<br/>
            
            </h3>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

