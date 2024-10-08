import React from 'react';
import logo from '../Image/nifa-new-logo.png';
import './Header.css';

function WebHeader() {
    return (
        <div className='Header'>
            <div className='HideforMob'>
                {/* Logo Section */}
                <div className='logo'>
                    <img src={logo} alt='logo1' />
                </div>

                {/* Navigation Links */}
                <div className='right'>
                    <div>Home</div>

                    {/* About Dropdown */}
                    <div className='About'>
                        <div className="dropdown">
                            <button className="dropbtn">About</button>
                            <div className="dropdown-content">
                                <a href="/facilities">Facilities</a>
                            </div>
                        </div>
                    </div>

                    {/* Courses Dropdown */}
                    <div className='Courses'>
                        <div className="dropdown">
                            <button className="dropbtn">Courses</button>
                            <div className="dropdown-content">
                                <a href="/courses/bfa">B.F.A from UGC Recognised University</a>
                                <a href="/courses/ma">M.A from UGC Recognised University</a>
                                <a href="/courses/advanced-diploma">Two years Advance Diploma in Fine Arts</a>
                                <a href="/courses/one-year-diploma">One Year Diploma in Fine Arts</a>
                                <a href="/courses/six-months-diploma">6 Months Diploma in Fine Arts</a>
                                <a href="/courses/nid-preparation">Entrance Preparation For N.I.D</a>
                                <a href="/courses/nift-preparation">Entrance Preparation for NIFT</a>
                                <a href="/courses/animation-sketching">Animation Sketching</a>
                                <a href="/courses/bfa-preparation">Entrance Preparation for B.F.A</a>
                                <a href="/courses/hobby-course">1 to 3 Months Certificate Hobby Course</a>
                                <a href="/courses/kids-diploma-l2">Kids Diploma (L-2)</a>
                                <a href="/courses/kids-diploma-l1">Kids Diploma (L-1)</a>
                            </div>
                        </div>
                    </div>

                    {/* Activities Dropdown */}
                    <div className='Activities'>
                        <div className="dropdown">
                            <button className="dropbtn">Activities</button>
                            <div className="dropdown-content">
                                <a href="/activities/workshops">Workshops</a>
                                <a href="/activities/outdoor">Outdoor</a>
                                <a href="/activities/national-seminar-2018">National Art Seminar & Award Show, 2018</a>
                                <a href="/activities/media-coverage">Media Coverage</a>
                                <a href="/activities/exhibition">Exhibition</a>
                            </div>
                        </div>
                    </div>

                    {/* Admission Section */}
                    <div className='Admission'>
                        <button className="dropbtn">Admission</button>
                    </div>

                    {/* Art Gallery Dropdown */}
                    <div className='Art Gallery'>
                        <div className="dropdown">
                            <button className="dropbtn">Art Gallery</button>
                            <div className="dropdown-content">
                                <a href="/art-gallery/kids-l2">Work by Kids Level-2</a>
                                <a href="/art-gallery/kids-l1">Work by Kids Level-1</a>
                                <a href="/art-gallery/sketching">Sketching</a>
                                <a href="/art-gallery/paintings">Paintings done by Students of Level-3</a>
                            </div>
                        </div>
                    </div>

                    {/* Franchise Section */}
                    <div className='Franchise'>
                        <button className="dropbtn">Franchise</button>
                    </div>

                    {/* Online Classes Section */}
                    <div className='Online-Classes'>
                        <button className="dropbtn">Online Classes</button>
                    </div>

                    {/* Videos Section */}
                    <div className='Videos'>
                        <button className="dropbtn">Videos</button>
                    </div>

                    {/* Pay Fee Section */}
                    <div className='Pay Fee'>
                        <button className="dropbtn">Pay Fee</button>
                    </div>

                    {/* Contact Section */}
                    <div className='Contact'>
                        <button className="dropbtn">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebHeader;
