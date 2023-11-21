import React from 'react';
import Slider from 'react-slick'; // or your specific import
import imageOne from "../../assets/tienda.webp";
import imageTwo from "../../assets/proyecto.jpg";
import imageThree from "../../assets/campesinos.jpg"

const SliderComponent = () => {

  let images = [
    imageOne,
    imageTwo,
    imageThree,
    // add more image URLs here
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;