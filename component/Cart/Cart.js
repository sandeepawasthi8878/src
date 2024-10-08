import React from 'react';
import './Cart.css'; 

function Cart() {
  const imageUrls = [
    'https://www.nifafinearts.com/images/entrance-prepration.jpg',
    'https://www.nifafinearts.com/images/kidl2.jpg',
    'https://www.nifafinearts.com/images/hccfk.jpg',
    'https://www.nifafinearts.com/images/kidl1.jpg',
    'https://www.nifafinearts.com/images/entrance-prepration.jpg',
    'https://www.nifafinearts.com/images/bfa.jpg',
    'https://www.nifafinearts.com/images/ma.jpg',
    'https://www.nifafinearts.com/images/entrance-prepration3.jpg',
    'https://www.nifafinearts.com/images/animation-sketching.jpg',
    'https://www.nifafinearts.com/images/3mchc.jpg',
    'https://www.nifafinearts.com/images/1ydfa.jpg',
    'https://www.nifafinearts.com/images/2ydfa.jpg',
  ];

  const cardData = [
    {
      description: '6 Months Diploma in Sketching & Oil Painting - Regular/Part time',
    },
    {
      description: '1 to 3 Months Certificate Hobby Course (Regular and Weekend)',
    },
    {
      description: 'One Year Diploma in Fine Arts-Regular/Part Time-Level-3',
    },
    {
      description: 'Two years Advance Diploma in Fine Arts - Regular/Part time',
    },
    {
      description: 'Entrance Preparation For N.I.D',
    },
    {
      description: 'B.F.A from UGC Recognized University',
    },
    {
      description: 'M.A in Painting from UGC University',
    },
    {
      description: 'Entrance preparation for B.F.A',
    },
    {
      description: 'Kids 1 year Diploma (Level-1)',
    },
    {
      description: 'Kids 1 year Diploma (Level-1)',
    },
    {
      description: 'Entrance Preparation for NIFT',
    },
    {
      description: '3 Months Hobby Certificate For Kids',
    },
  ];

  return (
    <div className="cart-container">
      <h1 className="center-text">Our Courses</h1>
      <div className="cart-row">
        {cardData.map((card, index) => (
          <div className="competition-category" key={index}>
            <div className="competition-card">
              <img src={imageUrls[index]} alt={`Course ${index + 1}`} />
              <p style={{ marginTop: '20px', marginBottom: '20px' }}>{card.description}</p>
              <button className="button-style3">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
