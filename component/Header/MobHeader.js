import React from 'react'
import logo from '../Image/nifa-new-logo.png'
import './MobHeader.css'

function MobHeader() {
    return (
        <div className='MobHeader'>
            {/* Logo Section */}
            <div className='logo'>
                <img src={logo} alt='NIFA Logo' />
            </div>

            {/* Email Section */}
            <div className='email'>
                <i className="ri-mail-line"></i>
                <a href="mailto:admission@nifafinearts.com">admission@nifafinearts.com</a>
            </div>

            {/* Phone Number Section */}
            <div className="numberheader">
                <a href="tel:+919555112200"><i className="ri-phone-line"></i> +91 - 9555112200 / 9810130552</a>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className='mobDropDown'>
                <div className='About'>
                    <div className="dropdown">
                        <button className="dropbtn">Home</button>
                        <div className="dropdown-content">
                            <button onClick={() => alert('About Us')} className="dropdown-item">About Us</button>
                            <button onClick={() => alert('Facilities')} className="dropdown-item">Facilities</button>
                            <button onClick={() => alert('Admissions')} className="dropdown-item">Admissions</button>
                            <button onClick={() => alert('Courses')} className="dropdown-item">Courses</button>
                            <button onClick={() => alert('Events')} className="dropdown-item">Events</button>
                            <button onClick={() => alert('Gallery')} className="dropdown-item">Gallery</button>
                            <button onClick={() => alert('Contact Us')} className="dropdown-item">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobHeader
