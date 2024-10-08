import React from 'react'
import logo from '../Image/nifa-new-logo.png';
import './Header.css'

function WebHeader() {
    return (
        <div className='Header'>
            <div className='HideforMob'>

                <div className='logo'>
                    <img src={logo} />
                </div>
                <div className='right'>
                    <div>Home</div>

                    <div className='About'>
                        <div class="dropdown">
                            <button class="dropbtn">About</button>
                            <div class="dropdown-content">
                                <a href="#">Facilities</a>
                            </div>
                        </div>
                    </div>

                    <div className='Courses'>
                        <div class="dropdown">
                            <button class="dropbtn">Courses</button>
                            <div class="dropdown-content">
                                <a href="#">B.F.A from UGC Recognised University</a>
                                <a href="#">M.A from UGC Recognised University</a>
                                <a href="#">Two years Advance Diploma in Fine Arts</a>
                                <a href="#">One Year Diploma in Fine Arts</a>
                                <a href="#">6 Months Diploma in Fine Arts</a>
                                <a href="#">Entrance Preparation For N.I.D</a>
                                <a href="#">Entrance Preparation for NIFT</a>
                                <a href="#">Animation Sketching</a>
                                <a href="#">Entrance Preparation for B.F.A</a>
                                <a href="#">1 to 3 Months Certificate Hobby Course</a>
                                <a href="#">Kids Diploma (L-2)</a>
                                <a href="#">Kids Diploma (L-1)</a>
                            </div>
                        </div>
                    </div>

                    <div className='Activities'>
                        <div class="dropdown">
                            <button class="dropbtn">Activities</button>
                            <div class="dropdown-content">
                                <a href="#">Workshops</a>
                                <a href="#">Outdoor</a>
                                <a href="#">National Art Seminar & Award Show, 2018</a>
                                <a href="#">Media Coverage</a>
                                <a href="#">Exhibition</a>
                            </div>
                        </div>
                    </div>

                    <div className='Admission'>
                        <div class="dropdown">
                            <button class="dropbtn">Admission</button>
                        </div>
                    </div>

                    <div className='Art Gallery'>
                        <div class="dropdown">
                            <button class="dropbtn">Art Gallery</button>
                            <div class="dropdown-content">
                                <a href="#">Work by Kids Level-2</a>
                                <a href="#">Work by Kids Level-</a>
                                <a href="#">Sketching</a>
                                <a href="#">Paintings done by Students of Level-3</a>
                            </div>
                        </div>
                    </div>

                    <div className='Franchise'>
                        <div class="dropdown">
                            <button class="dropbtn">Franchise</button>
                        </div>
                    </div>

                    <div className='Online-Classes'>
                        <div class="dropdown">
                            <button class="dropbtn" >Online Classes</button>
                        </div>
                    </div>

                    <div className='Videos'>
                        <div class="dropdown">
                            <button class="dropbtn">Videos</button>
                        </div>
                    </div>

                    <div className='Pay Fee'>
                        <div class="dropdown">
                            <button class="dropbtn">Pay Fee</button>
                        </div>
                    </div>

                    <div className='Contact'>
                        <div class="dropdown">
                            <button class="dropbtn">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebHeader
