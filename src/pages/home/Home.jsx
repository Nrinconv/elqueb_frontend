
import Slider from "react-slick";
import { Divider } from '@nextui-org/react';
import Partners from "../../components/Partners/Partners";
import News from "../../components/News/News";  
import Statistics from "../../components/Statistics/Statistics";
import Cards from "../../components/Card/Cards";
import SliderComponent from "../../components/Slider/SliderComponent";

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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <SliderComponent images={images} settings={settings} />
      <Divider />
      
      <Cards />
      <Divider />

      <div style={{ marginTop: '4rem', marginBottom: '8rem' }}>
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