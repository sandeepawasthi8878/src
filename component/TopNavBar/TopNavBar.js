import React from 'react'
import 'remixicon/fonts/remixicon.css';
import './TopNavBar.css'

function TopNavBar() {
    return (
        <div className='TopNavbar'>
            <div className='left'>
                <p>Welcome to the National Institute of Fine Arts</p>
            </div>
            <div className='right'>
                <div className="number">
                    <a href="tel:+919555112200"><i className="ri-phone-line"></i>9555112200</a>
                    <a href="tel:+919810130552" className='margintoeight' style={{ textDecoration: 'none' }}><i className="ri-phone-line"></i>9810130552</a>
                </div>
                <div className="insideRight">
                    <div className="top-mail">
                        <i className="ri-mail-line"></i>
                        <a href="mailto:admission@nifafinearts.com">admission@nifafinearts.com</a>
                    </div>
                    <ul className="header-social">
                        <li><a href="https://www.facebook.com"><i className="ri-facebook-circle-line"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="ri-twitter-line"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="ri-instagram-line"></i></a></li>
                        <li><a href="https://www.youtube.com"><i className="ri-youtube-line"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;
