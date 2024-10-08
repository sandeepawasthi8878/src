import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import './Videopart.css'; 
import logo from '../Image/appstore.png';
import logo1 from '../Image/gplay.png';

library.add(faGooglePlay, faApple);

function Videopart() {
  return (
    <div className="videopart-container">
      <div className="video-section">
        <div className="videopart">
          <h2>Online Classes</h2>
          <p>
            Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many
            amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of
            your practice through the assignment section. Live class section from the same app. Attendance, payment invoice,
            art news, announcements, important information, and direct connect with the management team are some more features.
            So hurry up and join now to experience personalized coaching by experts sitting at your home.
            We wish you Happy Learning. Stay Safe and Healthy.
          </p>
          <button className='btn1' >Read More</button>
        </div>
        <br />
        <div className="download-section">
          <h4>Download The App</h4>
          <br />
          <div className='lugo'>
            <img className='btn2' src={logo} alt="" />
            <img className='btn3' src={logo1} alt="" />
          </div>
        </div>
      </div>
      <div className="video-frame">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-9cJjaLXKqE"
          title="Embedded Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Videopart;
