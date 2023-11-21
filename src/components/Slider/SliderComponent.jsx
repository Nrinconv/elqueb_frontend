import React from 'react';
import Slider from 'react-slick'; // or your specific import

const SliderComponent = ({ images, settings }) => {
  return (
    
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`}  />
            </div>
          ))}
        </Slider>
      </div>
    
  );
};

export default SliderComponent;