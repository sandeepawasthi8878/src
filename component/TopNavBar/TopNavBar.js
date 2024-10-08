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
                <div class="number">
                    <a><i class="ri-phone-line"></i>9555112200</a>
                    <a  className='margintoeight' style={{textDecoration:'none'}}><i class="ri-phone-line"></i>9810130552</a>
                </div>
                <div class="insideRight">
                    <div class="top-mail">
                        <i class="ri-mail-line"></i>
                        <a>admission@nifafinearts.com</a>
                    </div>
                    <ul class="header-social">
                        <li><i class="ri-facebook-circle-line"></i></li>
                        <li><i class="ri-twitter-line"></i></li>
                        <li><i class="ri-instagram-line"></i></li>
                        <li><i class="ri-youtube-line"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar
