
import Slider from "react-slick";
import { Divider } from '@nextui-org/react';
import Partners from "../../components/Partners/Partners";
import News from "../../components/News/News";  
import Statistics from "../../components/Statistics/Statistics";
import Cards from "../../components/Card/Cards";

import imageOne from "../../assets/personas.avif";
import imageTwo from "../../assets/proyecto.jpg";
import imageThree from "../../assets/campesinos.jpg"

// Import slick carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  imageOne,
  imageTwo,
  imageThree,
  // add more image URLs here
];

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
      </div>
      <Divider />
      <Cards />
      <div style={{ marginTop: '2rem', marginBottom: '8rem' }}>
        <News />
      </div>
      <Divider />
      <Statistics />
      <Divider />
      <Partners />
      <Divider />
    </div>
  );
}