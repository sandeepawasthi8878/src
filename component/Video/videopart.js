// Video.js
import React from 'react';
import './videopart.css'; 

const Video = () => {
  const videoUrls = [
    'https://www.youtube.com/embed/VrGcY2k5zu',
    'https://www.youtube.com/embed/EnYCmNGoySc',
    'https://www.youtube.com/embed/iX6KgBTH__E',
    'https://www.youtube.com/embed/hvjJv1zVl2k',
    'https://www.youtube.com/embed/GfialCtEAYk',
    'https://www.youtube.com/embed/S5AUDt6999o',
  ];

  return (
    <div className='allcontainer'>
      <h1 className="center-text">Student's Testimonial</h1>
      <div className="video-row">
        {videoUrls.map((url, index) => (
          <div key={index} className="video-container">
            <iframe
              src={url}
              title={`Video ${index + 1}`}
              className="video-iframe"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
