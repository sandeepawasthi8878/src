// Paintings.js
import React from 'react';
import './Paintings.css'; // Import the CSS file

const imageUrls = [
  'https://www.nifafinearts.com/images/homegallery/img1.jpg',
  'https://www.nifafinearts.com/images/homegallery/img2.jpg',
  'https://www.nifafinearts.com/images/homegallery/img3.jpg',
  'https://www.nifafinearts.com/images/homegallery/img9.jpg',
  'https://www.nifafinearts.com/images/homegallery/img13.jpg',
  'https://www.nifafinearts.com/images/homegallery/img8.jpg',
  'https://www.nifafinearts.com/images/homegallery/img5.JPG',
  'https://www.nifafinearts.com/images/homegallery/img6.JPG',
  'https://www.nifafinearts.com/images/homegallery/img10.jpg',
  'https://www.nifafinearts.com/images/homegallery/img11.jpg',
  'https://www.nifafinearts.com/images/homegallery/img12.jpg',
  'https://www.nifafinearts.com/images/homegallery/img7.jpg',
  'https://www.nifafinearts.com/images/homegallery/img4.jpg',
  'https://www.nifafinearts.com/images/homegallery/img14.jpeg',
  'https://www.nifafinearts.com/images/homegallery/img15.jpeg',
  'https://www.nifafinearts.com/images/homegallery/img17.jpg',
  'https://www.nifafinearts.com/images/homegallery/img6.JPG', // Added image
  'https://www.nifafinearts.com/images/homegallery/img5.JPG', // Added image
  'https://www.nifafinearts.com/images/homegallery/img22.jpg', // Added image
];

const Paintings = () => {
  return (
    <div>
      <h1 className="center-text">Students Work</h1>
      <div className="image-container">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Student Work ${index + 1}`} className="image-style" />
        ))}
      </div>
    </div>
  );
};

export default Paintings;
