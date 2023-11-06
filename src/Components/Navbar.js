import React, { useState } from 'react';
import '../Components/Navbar.css'; // Import your CSS file
import logo from '../Assets/logo.svg';
import { NavLink } from 'react-router-dom';
import{FiChevronDown} from 'react-icons/fi'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo" width={120} height={15} />
        </div>

        <div className="dropdown">
          <NavLink className="dropbtn"> Why AdRoll? <FiChevronDown className='icon'/></NavLink>
          <div className="dropdown-content">
          <NavLink to="#"><h4>Why Adroll</h4></NavLink>
            
            <NavLink to="#">Managed service</NavLink>
            <NavLink to="#">Case study</NavLink>
            
          </div>
        </div>
        <div className="dropdown">
          <NavLink className="dropbtn">Marketing Platform <FiChevronDown className='icon'/></NavLink>
          <div className="dropdown-contents">
          <ul>
            <NavLink to="#" className='head'><h4>Marketing Platform</h4>
            <li>Audience & Segmentation</li>
            <li>Marketing Automation</li>
            <li>Customer Privacy Protection</li>
            
            </NavLink>
            <NavLink to="#"><h4>Campaigns</h4>
           <li> Retargeting Ads</li>
            <li>Brand Awareness Ads</li>
           
            
            </NavLink>
            <NavLink to="#"><h4>Marketing Channels</h4>
             <li>Display Advertising</li>
              <li>Video Advertising</li>
               <li> Native Advertising</li>
               <li> Email Marketing</li>
            </NavLink>
            <NavLink to="#"><h4>Connected Channels</h4>
            <li>
            Facebook Advertisting</li>
         <li>  Instagram Advertisting</li>
         <li> TikTok Advertisting</li>
          <li> Pinterest Advertisting</li>
           <li> Google Advertising
            </li>
            
            </NavLink>
            <NavLink to="#"><h4>Analytics</h4>
            <li>Cross-channel Performance</li>
              <li>Cross-channel Attributio</li>
           
           
            
            </NavLink>
            

            
        



            
</ul>
            
          </div>
        </div>
        <div className="dropdown">
          <NavLink className="dropbtn">For Ecommerce<FiChevronDown className='icon'/></NavLink>
          <div className="dropdown-content">
            <NavLink to="#"><h4>AdRoll for ecommerce</h4></NavLink>
            <NavLink to="#">Shopify</NavLink>
            <NavLink to="#">Shopify plus</NavLink>
            <NavLink to="#">WooCommerce</NavLink>
            <NavLink to="#">wix</NavLink>
            <NavLink to="#">BogCommerce</NavLink>
            <NavLink to="#">Magento</NavLink>
          </div>
        </div>
        <NavLink className='pricing'>Pricing</NavLink>
        <div className="dropdown">
          <NavLink className="dropbtn">Resources <FiChevronDown className='icon'/></NavLink>
          <div className="dropdown-contents">
          <ul>
            <NavLink to="#" className='head'><h4>Marketing  Resources</h4>
            <li>Resource Library</li>
            <li>AdRoll Blog</li>
            <li>Holiday marketing resources</li>
            <li>What is retargeting?</li>
            <li>Marketing Glossary</li>
            <li>state of digital marketing report</li>
            </NavLink>
            <NavLink to="#"><h4>Free Tools</h4>
           <li> Return On Ad Spend Calculator</li>
            <li>AdRoll UTM Link Builder</li>
           <li> Discount Profit Margin Calculator</li>
            
            </NavLink>
            <NavLink to="#"><h4>Community</h4>
             <li>Growth Guerilla Collective</li>
             <li>Small Business Shopping List</li>
              <li>  Events</li>
            </NavLink>
            <NavLink to="#"><h4>Customer Support</h4>
            <li>
            Getting Started</li>
            <li>Help Center</li>
           <li>Research Panel
            </li>
            
            </NavLink>
            

            
        



            
</ul>
     
        

      
            
          </div>
        </div>
      </div>

      {/* Hamburger menu for responsive design on smaller screens */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={showMenu ? 'bar1 change' : 'bar1'}></div>
        <div className={showMenu ? 'bar2 change' : 'bar2'}></div>
        <div className={showMenu ? 'bar3 change' : 'bar3'}></div>
      </div>

      {/* Responsive menu items */}
      <div className={showMenu ? 'responsive-menu show' : 'responsive-menu'}>
        <div className="dropdown">
          <NavLink className="dropbtns">Dropdown 1</NavLink>
          <div className="dropdown-content">
            <NavLink to="#">Link 1</NavLink>
            <NavLink to="#">Link 2</NavLink>
            <NavLink to="#">Link 3</NavLink>
          </div>
        </div>
       
        <div className="dropdown">
          <NavLink className="dropbtns">Dropdown 1</NavLink>
          <div className="dropdown-content">
            <NavLink to="#">Link 1</NavLink>
            <NavLink to="#">Link 2</NavLink>
            <NavLink to="#">Link 3</NavLink>
          </div>
        </div>
        <div className="dropdown">
          <NavLink className="dropbtns">Dropdown 1</NavLink>
          <div className="dropdown-content">
            
            <NavLink to="#">Link 1</NavLink>
            <NavLink to="#">Link 2</NavLink>
            <NavLink to="#">Link 3</NavLink>

            
          </div>
        </div>
        <button className="action-button">GET STARTED</button>
      </div>

      {/* Button on the right side for regular view */}
      <div className="navbar-right">
        <NavLink className='login'> Log in</NavLink>
        <button className="action-button">GET STARTED</button>
      </div>
    </nav>
  );
};

export default Navbar;


