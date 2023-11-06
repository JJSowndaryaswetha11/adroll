import React from 'react';

import '../Components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import iabIcon from '../Assets/iab-logo.png';
import NBIIcon from '../Assets/NAI_logo.webp'
import headerlogo from '../Assets/headerlogo.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="column">
        <h5>Why AdRoll?</h5>
        <p>
          Overview<br />
          Pricing
        </p>
        <h5>For e-commerce stores</h5>
        <p>
          AdRoll for e-commerce<br />
          Shopify<br />
          WooCommerce<br />
          BigCommerce<br />
          Magento
        </p>
      </div>

      
        
      

      <div className="column">
        <h5>Marketing Platform</h5>
        <p>
          One platform, every need<br />
          Find more customers<br />
          Build profitable relationships<br />
          Track and improve results<br />
          Protect customer data
        </p>
        <h5>Marketing Recipes</h5>
        <p>
       
         What are marketing recipes?<br/>
         Abandoned cart recovery<br/>
          Customer loyalty<br/>
           Retargeting<br/>
           Brand awareness<br/>
          
        </p>
      </div>
      <div className="column">
        <h5>Resources</h5>
        <p>
        
        Resource library<br/>
         Blog<br/>
        Community<br/>
        Events<br/>
       Help Center<br/>
       Third-Party Cookies<br/>
         AdRoll UTM Link Builder<br/>
       Digital Marketing Newsletter<br/>
        </p>
      </div>
      <div className="column">
     <h5> Partners</h5>
     <p>
        Overview<br/>
        Agencies<br/>
         Agency Directory<br/>
      partner Directory<br/>
       Referral Program<br/>
       API docs<br/>


     </p>
 
      </div>
      <div className="column">
        <h5>Company</h5>
        <p>
          About<br />
          News<br />
          Careers<br />
          Nextroll Engineering<br />
          
        </p>
      </div>
      <div className="column">
        <div className='social-icons'>
        <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      
          <div className='im-age'>
          <img src={iabIcon} alt="IAB Icon" className="iab-icon" />
          <img src={NBIIcon} alt="IAB Icon" className="iab-icon" />
          <img src={headerlogo} alt="IAB Icon" className="iab-icon" />
          </div>
      </div>
    </div>
  );
};

export default Footer;
