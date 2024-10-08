import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const ImageCarousel = () => {
  return (
    <>
      <div className="carousel-container">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0c3xlbnwwfHwwfHx8MA%3D%3D" alt="Placeholder 1" />
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1661859228809-19c901979bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0c3xlbnwwfHwwfHx8MA%3D%3D" alt="Placeholder 2" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0c3xlbnwwfHwwfHx8MA%3D%3D"  alt=""/>
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1673467010928-6a69e1ef267a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </Carousel>
        <div className="ticker-container">
          <div className="ticker-text">
            Nifa Updates:: All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please download the NIFA app from our online classes page to register for a complimentary trial class.
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h1>Welcome To National Institute of Fine Arts</h1>
          <p>
            National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. NIFA was established by MRS RENU KHERA in Delhi and NCR of Delhi in July 2005. The institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.
          </p>
          <h6>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</h6>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
