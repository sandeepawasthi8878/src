// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file
import logo from '../Image/appstore.png'
import logo1 from '../Image/gplay.png'

const Footer = () => {
  const footerData = {
    Company: ['About', 'Facilities', 'Career', 'Contact Us', 'Terms & Conditions', 'Refund Policy', 'Privacy Policy'],
    Activities: ['Art Gallery', 'Workshops', 'Outdoor Activities', 'Media Coverage', 'Art Events', 'Exhibition', 'Daily Activities'],
    'Popular Course': ['Diploma In Fine Arts', 'Certificate Hobby Course', 'Entrance Preparation', 'BFA', 'Animation Sketching', 'Kids Diploma'],
    'Our Locations': ['Gurgaon (Dlf Phase - 4)', 'Mumbai (Andheri West)', 'South Delhi (Kailash Colony)'],
    'International Branches': ['London', 'USA', 'Dubai, UAE'],
  };

  return (
    <footer>
      <div className="footer-container">
        {Object.keys(footerData).map((category, index) => (
          <div key={index} className="footer-column">
            <h3 className="centered-text">{category}</h3>
            <ul className="centered-list">
              {footerData[category].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-row">
        <div className="footer-box">
          <div className="centered-text">
            <p>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</p>
            <p>Connect With Us</p>
            <p>9555112200, 9810130552</p>
            <p>admission@nifafinearts.com</p>
          </div>
          <div className="social-icons">
            <a href="/" ><FontAwesomeIcon icon={faFacebook} className="icon-style1" /></a>
            <a href="/"><FontAwesomeIcon icon={faTwitter} className="icon-style2" /></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram} className="icon-style" /></a>
            <a href="/"><FontAwesomeIcon icon={faYoutube} className="icon-style" /></a>
          </div>
        </div>
        <div className="footer-box2">
          <div className="button-container">
            <h2>Download The App</h2>
            <div className='btnt'>
              <img className='btn2' src={logo} />
              <img className='btn3'src={logo1} />
          </div>
            <p className="copyright">© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
