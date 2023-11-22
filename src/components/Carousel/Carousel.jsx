import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import imageOne from "../../assets/findeter1.png";
import imageTwo from "../../assets/findeter2.png";
import imageThree from "../../assets/findeter3.png";
import './Carousel.css';

const CarouselComponent = () => {
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    // add more image URLs here
  ];

  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} dynamicHeight={true} showStatus={false} interval={3000} >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;