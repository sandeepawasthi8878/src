import React from 'react'
import logo from '../Image/nifa-new-logo.png'
import './MobHeader.css'

function MobHeader() {
    return (
        <div className='MobHeader'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='email'>
                <i class="ri-mail-line"></i>
                <a>admission@nifafinearts.com</a>
            </div>

            <div class="numberheader">
                <a><i class="ri-phone-line"></i> +91 - 9555112200/9810130552</a>
            </div>

            <div className='mobDropDown'>
            <div className='About'>
                        <div class="dropdown">
                            <button class="dropbtn">Home</button>
                            <div class="dropdown-content">
                                <a href="#">About</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                                <a href="#">Facilities</a>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default MobHeader
